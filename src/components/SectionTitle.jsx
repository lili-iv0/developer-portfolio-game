export default function SectionTitle({ title, kicker, children, action }) {
  return (
    <div className="section-head">
      <div>
        {kicker && <p className="eyebrow">{kicker}</p>}
        <h2>{title}</h2>
        {children && <p className="muted">{children}</p>}
      </div>
      {action}
    </div>
  );
}
