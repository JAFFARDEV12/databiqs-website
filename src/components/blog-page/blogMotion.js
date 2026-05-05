/** Shared motion presets for the blog / insights page (Truus / agency-style reveals). */

export const easeOutExpo = [0.22, 1, 0.36, 1];

export const viewportOnce = { once: true, amount: 0.18, margin: "-48px 0px 0px 0px" };

export const heroStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

export const heroItem = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.72, ease: easeOutExpo },
  },
};

export const heroCard = {
  hidden: { opacity: 0, x: 72, scale: 0.94 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.88, ease: easeOutExpo },
  },
};

export const gridStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

export const cardLift = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.58, ease: easeOutExpo },
  },
};

export const newsletterShell = {
  hidden: { opacity: 0, y: 56, scale: 0.96, rotateX: 6 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: { duration: 0.75, ease: easeOutExpo },
  },
};

export const newsletterInnerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.11, delayChildren: 0.12 },
  },
};

export const newsletterItem = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.62, ease: easeOutExpo },
  },
};
