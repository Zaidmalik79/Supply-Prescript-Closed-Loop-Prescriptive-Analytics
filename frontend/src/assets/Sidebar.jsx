function Sidebar() {
  return (
    <div
      style={{
        width: "220px",
        minHeight: "100vh",
        background: "#f5f5f5",
        padding: "20px",
      }}
    >
      <h3>Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>🏠 Dashboard</li>
        <li>📦 Shipments</li>
        <li>🤖 Prediction</li>
        <li>💡 Recommendations</li>
      </ul>
    </div>
  );
}

export default Sidebar;