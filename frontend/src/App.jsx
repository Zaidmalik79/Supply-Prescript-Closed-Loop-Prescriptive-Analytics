import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;