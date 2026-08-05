import { useEffect, useState } from "react";

import { getDashboardData } from "../services/api";

import StatCard from "./StatCard";
import SalesChart from "./SalesChart";
import ShipmentChart from "./ShipmentChart";
import RegionChart from "./RegionChart";

import "../styles/dashboard.css";

function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    const data = await getDashboardData();
    setDashboard(data);
  };

  if (!dashboard) return <h2>Loading...</h2>;

  // Temporary demo data (will be replaced by backend APIs)
  const salesData = [
    { month: "Jan", sales: 12000 },
    { month: "Feb", sales: 18000 },
    { month: "Mar", sales: 15000 },
    { month: "Apr", sales: 22000 },
    { month: "May", sales: 27000 },
  ];

  const shipmentData = [
    { status: "On Time", value: 60 },
    { status: "Late", value: 30 },
    { status: "Delayed", value: 10 },
  ];

  const regionData = [
    { region: "Asia", orders: 320 },
    { region: "Europe", orders: 220 },
    { region: "USA", orders: 180 },
    { region: "Africa", orders: 80 },
  ];

  return (
    <div className="dashboard">

      <h1>SupplyPrescript Analytics</h1>

      <div className="cards">

        <StatCard
          title="Orders"
          value={dashboard.total_orders}
          color="#2563eb"
        />

        <StatCard
          title="Sales"
          value={dashboard.total_sales}
          color="#10b981"
        />

        <StatCard
          title="Late Deliveries"
          value={dashboard.late_deliveries}
          color="#ef4444"
        />

        <StatCard
          title="Avg Shipping"
          value={dashboard.avg_shipping_days}
          color="#f59e0b"
        />

      </div>

      <div className="charts">

        <SalesChart data={salesData} />

        <ShipmentChart data={shipmentData} />

      </div>

      <RegionChart data={regionData} />

    </div>
  );
}

export default Dashboard;