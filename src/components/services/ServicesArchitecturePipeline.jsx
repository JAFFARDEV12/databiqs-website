import { useMemo, useState } from 'react';
import './ServicesArchitecturePipeline.css';

const PIPELINE_STEPS = [
  {
    id: 'discover',
    title: 'Discover',
    description: 'Audit workflows, data readiness, and bottlenecks that affect business growth.',
  },
  {
    id: 'design',
    title: 'Design',
    description: 'Define AI architecture, governance, and milestones tied to measurable ROI.',
  },
  {
    id: 'build',
    title: 'Build',
    description: 'Implement production-grade models, automations, and human-in-the-loop controls.',
  },
  {
    id: 'scale',
    title: 'Scale',
    description: 'Optimize, monitor drift, and expand high-performing AI systems across teams.',
  },
];

const ServicesArchitecturePipeline = () => {
  const [activeStep, setActiveStep] = useState(PIPELINE_STEPS[0].id);

  const activeIndex = useMemo(
    () => Math.max(0, PIPELINE_STEPS.findIndex((step) => step.id === activeStep)),
    [activeStep]
  );

  return (
    <section className="services-pipeline" aria-labelledby="services-pipeline-title">
      <div className="services-pipeline__head">
        <p className="services-pipeline__eyebrow">AI Architecture Pipeline</p>
        <h2 id="services-pipeline-title" className="services-pipeline__title">
          From Strategy To Scalable Intelligence
        </h2>
      </div>

      <div className="services-pipeline__track-wrap" aria-hidden="true">
        <span className="services-pipeline__track" />
        <span
          className="services-pipeline__track-progress"
          style={{ '--progress': `${(activeIndex / (PIPELINE_STEPS.length - 1)) * 100}%` }}
        />
      </div>

      <div className="services-pipeline__grid">
        {PIPELINE_STEPS.map((step, index) => (
          <button
            key={step.id}
            type="button"
            className={`services-pipeline__card${activeStep === step.id ? ' is-active' : ''}`}
            onMouseEnter={() => setActiveStep(step.id)}
            onFocus={() => setActiveStep(step.id)}
            onClick={() => setActiveStep(step.id)}
            aria-pressed={activeStep === step.id}
          >
            <span className="services-pipeline__index">{`0${index + 1}`}</span>
            <h3 className="services-pipeline__card-title">{step.title}</h3>
            <p className="services-pipeline__card-description">{step.description}</p>
          </button>
        ))}
      </div>
    </section>
  );
};

export default ServicesArchitecturePipeline;
