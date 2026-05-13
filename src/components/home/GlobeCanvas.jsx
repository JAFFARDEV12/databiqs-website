import { useEffect, useRef } from 'react';

const TECH = [
  { label: 'React',    color: '#61dafb', lat:  35, lon:    0 },
  { label: 'Node.js',  color: '#68a063', lat: -20, lon:   40 },
  { label: 'Python',   color: '#ffd43b', lat:  50, lon:  120 },
  { label: 'Docker',   color: '#0db7ed', lat: -45, lon:   80 },
  { label: 'AWS',      color: '#ff9900', lat:  10, lon:  -60 },
  { label: 'K8s',      color: '#326ce5', lat:  60, lon:  -30 },
  { label: 'GraphQL',  color: '#e535ab', lat: -30, lon:  150 },
  { label: 'Postgres', color: '#336791', lat:  20, lon:  160 },
  { label: 'Redis',    color: '#dc382d', lat: -55, lon: -100 },
  { label: 'Next.js',  color: '#ffffff', lat:  40, lon: -140 },
  { label: 'Figma',    color: '#a259ff', lat:  70, lon:   60 },
  { label: 'CI/CD',    color: '#34d399', lat: -10, lon:  -20 },
];

const CONNS = [[0,11],[1,3],[2,6],[4,5],[0,7],[1,11],[3,4],[5,9],[2,7]];

function toXYZ(lat, lon) {
  const phi = (lat * Math.PI) / 180;
  const lam = (lon * Math.PI) / 180;
  return [Math.cos(phi) * Math.cos(lam), Math.sin(phi), Math.cos(phi) * Math.sin(lam)];
}

function buildDots(count) {
  const dots = [];
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(1 - 2 * (i + 0.5) / count);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    dots.push([Math.sin(phi) * Math.cos(theta), Math.cos(phi), Math.sin(phi) * Math.sin(theta)]);
  }
  return dots;
}

function buildGrid() {
  const grid = [];
  for (let lat = -75; lat <= 75; lat += 15) {
    const ring = [];
    const phi = (lat * Math.PI) / 180;
    for (let lon = 0; lon <= 360; lon += 5) {
      const lam = (lon * Math.PI) / 180;
      ring.push([Math.cos(phi) * Math.cos(lam), Math.sin(phi), Math.cos(phi) * Math.sin(lam)]);
    }
    grid.push(ring);
  }
  for (let lon = 0; lon < 180; lon += 15) {
    const ring = [];
    const lam = (lon * Math.PI) / 180;
    for (let lat = -90; lat <= 90; lat += 4) {
      const phi = (lat * Math.PI) / 180;
      ring.push([Math.cos(phi) * Math.cos(lam), Math.sin(phi), Math.cos(phi) * Math.sin(lam)]);
    }
    grid.push(ring);
  }
  return grid;
}

const DOTS = buildDots(700);
const GRID = buildGrid();
const TECH_NODES = TECH.map(t => ({ ...t, pos: toXYZ(t.lat, t.lon) }));

const GlobeCanvas = () => {
  const canvasRef = useRef(null);
  const wrapRef  = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap   = wrapRef.current;
    if (!canvas || !wrap) return;

    const ctx = canvas.getContext('2d');
    let W, H, cx, cy, R;
    let animId = null;
    let rotX = 0.3, rotY = 0.4;
    let velX = 0,   velY = 0.005;
    let dragging = false;
    /** Pointer over globe: idle spin pauses; movement rotates without clicking. */
    let hovering = false;
    let lastMX = 0, lastMY = 0;
    /** True on previous frame: pointer was inside the drawn globe circle (not whole canvas rect). */
    let pointerWasInGlobe = false;
    const POINTER_ROT_SENS = 0.009;
    /** Draw uses R = W*0.4; interaction uses a smaller disc so corners / “near miss” do not activate. */
    const GLOBE_RADIUS_FRAC = 0.4;
    const HIT_RADIUS_FRAC = 0.34;

    function resize() {
      const s = wrap.offsetWidth;
      canvas.width  = s * devicePixelRatio;
      canvas.height = s * devicePixelRatio;
      W = canvas.width; H = canvas.height;
      cx = W / 2; cy = H / 2; R = W * GLOBE_RADIUS_FRAC;
    }
    resize();

    /** Hit test in CSS pixels from getBoundingClientRect (avoids DPR / backing-store mismatch). */
    function isPointerInGlobe(clientX, clientY) {
      const rect = canvas.getBoundingClientRect();
      if (rect.width <= 0 || rect.height <= 0) return false;
      const cxCss = rect.left + rect.width * 0.5;
      const cyCss = rect.top + rect.height * 0.5;
      const rHit = Math.min(rect.width, rect.height) * HIT_RADIUS_FRAC;
      const dx = clientX - cxCss;
      const dy = clientY - cyCss;
      return dx * dx + dy * dy <= rHit * rHit;
    }

    function rotate(px, py, pz, rx, ry) {
      const y1 =  py * Math.cos(rx) - pz * Math.sin(rx);
      const z1 =  py * Math.sin(rx) + pz * Math.cos(rx);
      const x2 =  px * Math.cos(ry) + z1 * Math.sin(ry);
      const z2 = -px * Math.sin(ry) + z1 * Math.cos(ry);
      return [x2, y1, z2];
    }

    function project(x, y, z) {
      const f = 2.8 / (2.8 + z);
      return [cx + x * R * f, cy - y * R * f, z];
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Base gradient fill - solid #0054E9 with subtle depth
      const g = ctx.createRadialGradient(cx - R * 0.3, cy - R * 0.35, R * 0.02, cx, cy, R);
      g.addColorStop(0,   'rgba(64,128,240,1)');
      g.addColorStop(0.5, 'rgba(0,84,233,1)');
      g.addColorStop(1,   'rgba(0,60,180,1)');
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();

      // Specular highlight
      const sg = ctx.createRadialGradient(cx - R * 0.32, cy - R * 0.36, 0, cx - R * 0.2, cy - R * 0.2, R * 0.6);
      sg.addColorStop(0, 'rgba(255,255,255,0.35)');
      sg.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.fillStyle = sg; ctx.fill();

      ctx.save();
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.clip();

      // Grid lines
      for (const ring of GRID) {
        ctx.beginPath(); let first = true;
        for (const [px, py, pz] of ring) {
          const [rx, ry, rz] = rotate(px, py, pz, rotX, rotY);
          const [sx, sy] = project(rx, ry, rz);
          if (first) { ctx.moveTo(sx, sy); first = false; } else ctx.lineTo(sx, sy);
        }
        ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.lineWidth = 0.5; ctx.stroke();
      }

      // Surface dots
      const rdots = DOTS
        .map(([px, py, pz]) => {
          const [rx, ry, rz] = rotate(px, py, pz, rotX, rotY);
          const [sx, sy] = project(rx, ry, rz);
          return { sx, sy, rz };
        })
        .filter(d => d.rz > -0.05);

      for (const d of rdots) {
        const a = Math.pow(Math.max(0, (d.rz + 0.05) / 1.05), 0.6);
        ctx.beginPath();
        ctx.arc(d.sx, d.sy, (0.4 + d.rz * 0.6) * devicePixelRatio, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${a * 0.4})`; ctx.fill();
      }

      // Connection arcs
      for (const [ai, bi] of CONNS) {
        const a = TECH_NODES[ai], b = TECH_NODES[bi];
        const [ax, ay, az] = rotate(a.pos[0], a.pos[1], a.pos[2], rotX, rotY);
        const [bx, by, bz] = rotate(b.pos[0], b.pos[1], b.pos[2], rotX, rotY);
        if (az < 0 && bz < 0) continue;
        const [asx, asy] = project(ax, ay, az);
        const [bsx, bsy] = project(bx, by, bz);
        const vis = Math.max(0, (az + bz) / 2);
        const cpx = (asx + bsx) / 2 - (asy - bsy) * 0.25;
        const cpy = (asy + bsy) / 2 + (asx - bsx) * 0.25;
        ctx.beginPath(); ctx.moveTo(asx, asy);
        ctx.quadraticCurveTo(cpx, cpy, bsx, bsy);
        ctx.strokeStyle = `rgba(255,255,255,${vis * 0.35})`; ctx.lineWidth = 0.8; ctx.stroke();
      }

      // Tech node dots + labels
      const sorted = TECH_NODES
        .map(t => {
          const [rx, ry, rz] = rotate(t.pos[0], t.pos[1], t.pos[2], rotX, rotY);
          const [sx, sy] = project(rx, ry, rz);
          return { ...t, sx, sy, rz };
        })
        .sort((a, b) => a.rz - b.rz);

      for (const t of sorted) {
        if (t.rz < 0.1) continue;
        const alpha = Math.pow((t.rz - 0.1) / 0.9, 0.5);
        const r = (3 + t.rz * 4) * devicePixelRatio;

        // Pulse ring
        ctx.beginPath(); ctx.arc(t.sx, t.sy, r * 2.5, 0, Math.PI * 2);
        ctx.strokeStyle = `${t.color}${Math.round(alpha * 30).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 0.6; ctx.stroke();

        // Node dot
        ctx.beginPath(); ctx.arc(t.sx, t.sy, r, 0, Math.PI * 2);
        ctx.fillStyle = t.color + Math.round(alpha * 255).toString(16).padStart(2, '0');
        ctx.fill();

        // Label
        if (t.rz > 0.25) {
          ctx.font = `${Math.round(9 * devicePixelRatio)}px 'JetBrains Mono',monospace`;
          ctx.fillStyle = `rgba(255,255,255,${alpha})`;
          ctx.textAlign = 'center';
          ctx.fillText(t.label, t.sx, t.sy - (r + 4 * devicePixelRatio));
        }
      }

      ctx.restore();

      // Edge ring
      ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0,84,233,0.5)'; ctx.lineWidth = 1.5; ctx.stroke();
    }

    function loop() {
      if (!dragging && !hovering) {
        rotY += velY; rotX += velX;
        velY *= 0.97; velX *= 0.97;
        velY += 0.003;
      }
      draw();
      animId = requestAnimationFrame(loop);
    }
    loop();

    // Mouse interaction
    function onMouseDown(e) {
      if (!isPointerInGlobe(e.clientX, e.clientY)) return;
      dragging = true;
      lastMX = e.clientX;
      lastMY = e.clientY;
      velX = 0;
      velY = 0;
      canvas.style.cursor = 'grabbing';
    }
    function onMouseMove(e) {
      if (!dragging) return;
      if (!isPointerInGlobe(e.clientX, e.clientY)) {
        lastMX = e.clientX;
        lastMY = e.clientY;
        return;
      }
      velY = (e.clientX - lastMX) * POINTER_ROT_SENS;
      velX = (e.clientY - lastMY) * POINTER_ROT_SENS;
      rotY += velY; rotX += velX;
      lastMX = e.clientX; lastMY = e.clientY;
    }
    function onMouseUp() {
      dragging = false;
      canvas.style.cursor = 'grab';
    }

    function onCanvasPointerLeave() {
      hovering = false;
      pointerWasInGlobe = false;
    }

    function onCanvasPointerMove(e) {
      const inside = isPointerInGlobe(e.clientX, e.clientY);
      if (!inside) {
        hovering = false;
        pointerWasInGlobe = false;
        return;
      }

      hovering = true;
      if (dragging) return;

      if (!pointerWasInGlobe) {
        velX = 0;
        velY = 0;
        lastMX = e.clientX;
        lastMY = e.clientY;
        pointerWasInGlobe = true;
        return;
      }

      const dx = e.clientX - lastMX;
      const dy = e.clientY - lastMY;
      rotY += dx * POINTER_ROT_SENS;
      rotX += dy * POINTER_ROT_SENS;
      lastMX = e.clientX;
      lastMY = e.clientY;
    }

    // Touch interaction
    function onTouchStart(e) {
      const t = e.touches[0];
      if (!isPointerInGlobe(t.clientX, t.clientY)) return;
      dragging = true;
      lastMX = t.clientX;
      lastMY = t.clientY;
      velX = 0;
      velY = 0;
    }
    function onTouchMove(e) {
      if (!dragging) return;
      const t = e.touches[0];
      if (!isPointerInGlobe(t.clientX, t.clientY)) {
        lastMX = t.clientX;
        lastMY = t.clientY;
        return;
      }
      velY = (t.clientX - lastMX) * POINTER_ROT_SENS;
      velX = (t.clientY - lastMY) * POINTER_ROT_SENS;
      rotY += velY; rotX += velX;
      lastMX = t.clientX; lastMY = t.clientY;
    }

    canvas.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('touchstart', onTouchStart, { passive: true });
    canvas.addEventListener('touchmove', onTouchMove, { passive: true });
    canvas.addEventListener('touchend', onMouseUp);
    window.addEventListener('resize', resize);

    canvas.addEventListener('pointermove', onCanvasPointerMove);
    canvas.addEventListener('pointerleave', onCanvasPointerLeave);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onMouseUp);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', onCanvasPointerMove);
      canvas.removeEventListener('pointerleave', onCanvasPointerLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      style={{ width: '100%', height: '100%', touchAction: 'none' }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: '100%', cursor: 'grab' }}
      />
    </div>
  );
};

export default GlobeCanvas;
