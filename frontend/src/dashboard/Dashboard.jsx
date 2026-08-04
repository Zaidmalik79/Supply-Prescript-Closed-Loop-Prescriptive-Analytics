import { useEffect, useState } from "react";
import "../styles/dashboard.css";
import { getDashboardData } from "../services/api";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getDashboardData();
      setDashboard(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!dashboard) {
    return <h2>Loading Dashboard...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>SupplyPrescript Dashboard</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>

        <div style={cardStyle}>
          <h3>Total Orders</h3>
          <h2>{dashboard.total_orders}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Total Sales</h3>
          <h2>${dashboard.total_sales.toLocaleString()}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Late Deliveries</h3>
          <h2>{dashboard.late_deliveries}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Avg Shipping Days</h3>
          <h2>{dashboard.avg_shipping_days}</h2>
        </div>

        <div style={cardStyle}>
          <h3>Scheduled Days</h3>
          <h2>{dashboard.avg_scheduled_days}</h2>
        </div>

      </div>
    </div>
  );
}

const cardStyle = {
  width: "220px",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 0 8px rgba(0,0,0,.2)",
  textAlign: "center",
};

export default Dashboard;