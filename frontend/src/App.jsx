import { useState } from "react";

import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";

import Dashboard from "./dashboard/Dashboard";
import Prediction from "./prediction/Prediction";

import "./App.css";

function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <div className="app">

      {/* Top Navigation */}
      <Navbar />

      {/* Main Application */}
      <div className="main-container">

        {/* Sidebar */}
        <Sidebar
          page={page}
          onPageChange={setPage}
        />

        {/* Page Content */}
        <main className="content">

          {page === "dashboard" && (
            <Dashboard />
          )}

          {page === "prediction" && (
            <Prediction />
          )}

          {page === "shipments" && (
            <div className="page-placeholder">
              <div className="placeholder-card">
                <span className="placeholder-icon">🚚</span>

                <h1>Shipments</h1>

                <p>
                  Shipment information and delivery tracking
                  will be displayed here.
                </p>
              </div>
            </div>
          )}

          {page === "recommendation" && (
            <div className="page-placeholder">
              <div className="placeholder-card">
                <span className="placeholder-icon">💡</span>

                <h1>Recommendations</h1>

                <p>
                  Business recommendations based on delivery
                  predictions will appear here.
                </p>
              </div>
            </div>
          )}

        </main>

      </div>

    </div>
  );
}

export default App;