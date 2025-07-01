import "./Languages.css";

const languages = [
  { name: "Arabic", level: 5, label: "Native", color: "#E64A19" },
  { name: "English", level: 4, label: "Fluent", color: "#2196F3" },
  { name: "Turkish", level: 3, label: "Intermediate", color: "#4CAF50" },
];

export default function Languages() {
  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <section id="languages" className="languages-section">
      <h2>Languages</h2>
      <div className="rings-container">
        {languages.map((lang) => {
          const percent = (lang.level / 5) * 100;
          const dashOffset = circumference - (percent / 100) * circumference;
          return (
            <div key={lang.name} className="ring-item">
              <svg
                height={radius * 2}
                width={radius * 2}
                className="ring-svg"
              >
                <circle
                  stroke="#eee"
                  fill="transparent"
                  strokeWidth={stroke}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
                <circle
                  className="ring-progress"
                  stroke={lang.color}
                  fill="transparent"
                  strokeWidth={stroke}
                  strokeLinecap="round"
                  strokeDasharray={`${circumference} ${circumference}`}
                  style={{ strokeDashoffset: dashOffset }}
                  r={normalizedRadius}
                  cx={radius}
                  cy={radius}
                />
              </svg>
              <div className="ring-label">
                <strong>{lang.name}</strong>
                <span className="ring-sub">{lang.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
