function Recommendations() {
  const recommendations = [
    "Use First Class shipping for high-priority orders.",
    "Increase warehouse inventory in high-demand regions.",
    "Monitor shipments with high delay risk.",
    "Optimize delivery routes using historical data.",
    "Reduce shipment delays by improving supplier coordination."
  ];

  return (
    <div
      style={{
        marginTop: "30px",
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
      }}
    >
      <h2>AI Recommendations</h2>

      <ul>
        {recommendations.map((item, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recommendations;