interface UIMockupProps {
  title: string;
  sidebar: string[];
  metrics: { value: string; label: string }[];
  bars: string[];
  list: string[];
  compact?: boolean;
  variant?: string;
}

export default function UIMockup({ title, sidebar, metrics, bars, list, compact, variant }: UIMockupProps) {
  return (
    <div className={`glx-ui-mockup${compact ? " is-compact" : ""}${variant ? " glx-ui-mockup-" + variant : ""}`} aria-label={`Anonymized ${title} interface mockup`}>
      <div className="glx-ui-top">
        <div><span></span><span></span><span></span></div>
        <strong>{title}</strong>
      </div>
      <div className="glx-ui-body">
        <div className="glx-ui-sidebar">
          {sidebar.map((s, i) => <span key={i}>{s}</span>)}
        </div>
        <div className="glx-ui-main">
          <div className="glx-ui-metric-row">
            {metrics.map((m, i) => (
              <div key={i} className="glx-ui-metric">
                <strong>{m.value}</strong>
                <span>{m.label}</span>
              </div>
            ))}
          </div>
          <div className="glx-ui-bars">
            {bars.map((b, i) => <span key={i} style={{ "--w": b } as React.CSSProperties}></span>)}
          </div>
          <div className="glx-ui-list">
            {list.map((l, i) => <span key={i}>{l}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}
