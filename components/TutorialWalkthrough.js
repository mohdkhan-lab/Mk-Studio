"use client";
import { useState } from "react";

export default function TutorialWalkthrough({ app }) {
  const [activeStep, setActiveStep] = useState(0);

  if (!app.tutorial || app.tutorial.length === 0) return null;

  const current = app.tutorial[activeStep] || app.tutorial[0];

  return (
    <div className="tutorial-container">
      <div className="tutorial-head">
        <span className="section__badge">Interactive Workflow Simulation</span>
        <h3 className="tutorial-title">See How {app.name} Works in Action</h3>
        <p className="tutorial-subtitle">
          Follow the step-by-step process used by YouTube creators to produce viral story videos &amp; automated cuts.
        </p>
      </div>

      {/* Step Indicator Tabs */}
      <div className="tutorial-tabs">
        {app.tutorial.map((item, idx) => (
          <button
            key={idx}
            type="button"
            className={`tutorial-tab-btn ${activeStep === idx ? "is-active" : ""}`}
            onClick={() => setActiveStep(idx)}
          >
            <span className="tutorial-tab-num">{item.step}</span>
            <span>{item.title}</span>
          </button>
        ))}
      </div>

      {/* Interactive Simulator Screen */}
      <div className="simulator-box">
        <div className="simulator-screen">
          <div className="simulator-topbar">
            <div className="simulator-dots">
              <span className="s-dot s-dot--red"></span>
              <span className="s-dot s-dot--yellow"></span>
              <span className="s-dot s-dot--green"></span>
            </div>
            <div className="simulator-title-bar">
              {app.name} • {current.title}
            </div>
            <span className="simulator-badge">{current.simulator.badge}</span>
          </div>

          <div className="simulator-content">
            <div className="simulator-icon">{current.simulator.icon}</div>
            <div className="simulator-info">
              <h4 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 6 }}>
                Step {current.step}: {current.title}
              </h4>
              <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 14, lineHeight: 1.6 }}>
                {current.desc}
              </p>
              <div className="simulator-terminal">
                <span style={{ color: "var(--gold)" }}>❯</span> {current.simulator.text}
              </div>
            </div>
          </div>

          {/* Interactive Step Navigation */}
          <div className="simulator-footer">
            <button
              type="button"
              disabled={activeStep === 0}
              onClick={() => setActiveStep(activeStep - 1)}
              className="btn btn--secondary btn--sm"
            >
              <span>← Previous Step</span>
            </button>
            <span style={{ fontSize: 12, color: "var(--text-dim)", fontWeight: 700 }}>
              Step {activeStep + 1} of {app.tutorial.length}
            </span>
            <button
              type="button"
              disabled={activeStep === app.tutorial.length - 1}
              onClick={() => setActiveStep(activeStep + 1)}
              className="btn btn--primary btn--sm"
            >
              <span>Next Step →</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

