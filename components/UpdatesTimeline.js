"use client";
import { APPS_DATA } from "../lib/appsData";

export default function UpdatesTimeline() {
  // Aggregate all updates from apps
  const allUpdates = [];
  APPS_DATA.forEach((app) => {
    (app.updates || []).forEach((u) => {
      allUpdates.push({
        appName: app.name,
        appIcon: app.icon,
        version: u.version,
        date: u.date,
        notes: u.notes,
      });
    });
  });

  return (
    <div className="updates-card" id="updates">
      <div className="section__head" style={{ marginBottom: 24 }}>
        <span className="section__badge">Changelog &amp; Releases</span>
        <h3 className="section__title" style={{ fontSize: 22 }}>
          Latest App Updates
        </h3>
        <p className="section__subtitle" style={{ fontSize: 13.5 }}>
          Stay updated on performance enhancements, feature rollouts, and new software releases by Mohd Khan.
        </p>
      </div>

      <div className="updates-list">
        {allUpdates.map((item, idx) => (
          <div key={idx} className="update-item">
            <div className="update-item__header">
              <span style={{ fontSize: 16 }}>{item.appIcon}</span>
              <span className="update-item__app">{item.appName}</span>
              <span className="update-item__ver">{item.version}</span>
              <span className="update-item__date">{item.date}</span>
            </div>
            <p className="update-item__text">{item.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

