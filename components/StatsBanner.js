export default function StatsBanner() {
  const stats = [
    { num: "1,250+", label: "Creators & Editors", icon: "👥" },
    { num: "60,000+", label: "Minutes Rendered", icon: "⏱️" },
    { num: "5x Turbo", label: "WebCodecs Hardware Speed", icon: "⚡" },
    { num: "100%", label: "Local-First & Private", icon: "🔒" },
  ];

  return (
    <div className="stats-banner-wrap">
      <div className="container">
        <div className="stats-banner-grid">
          {stats.map((s, idx) => (
            <div key={idx} className="stats-banner-item">
              <span className="stats-banner-icon">{s.icon}</span>
              <div>
                <div className="stats-banner-num">{s.num}</div>
                <div className="stats-banner-label">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

