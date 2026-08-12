function StatCard({ title, value, color }) {
  return (
    <div
      className="stat-card"
      style={{ borderTop: `4px solid ${color}` }}
    >
      <h3>{title}</h3>
      <h2>{value ?? 0}</h2>
    </div>
  );
}

export default StatCard;