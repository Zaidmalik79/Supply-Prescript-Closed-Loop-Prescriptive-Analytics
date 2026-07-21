import Prediction from "./Prediction";
import Charts from "./Charts";
import Shipments from "./Shipments";
import Recommendations from "./Recommendations";

function Dashboard() {
  return (
    <div
      style={{
        flex: 1,
        padding: "25px",
        background: "#f4f6f9",
        minHeight: "100vh",
      }}
    >
      <h1>📊 SupplyPrescript Dashboard</h1>

      {/* KPI Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Total Shipments</h3>
          <h2>50,000</h2>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Late Deliveries</h3>
          <h2>8,420</h2>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>On-Time Delivery</h3>
          <h2>41,580</h2>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "20px",
            borderRadius: "10px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Accuracy</h3>
          <h2>96%</h2>
        </div>
      </div>

      {/* Prediction */}
      <div
        style={{
          marginTop: "40px",
          background: "#fff",
          padding: "25px",
          borderRadius: "10px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      > 
        <Prediction />
        <Charts />
        <Shipments />
        <Recommendations />
      </div>
    </div>
  );
}

export default Dashboard;