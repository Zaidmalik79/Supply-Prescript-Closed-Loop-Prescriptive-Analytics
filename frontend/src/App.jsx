import Navbar from "./layout/Navbar";
import Sidebar from "./layout/Sidebar";
import Dashboard from "./dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <div className="main-container">

        <Sidebar />

        <div className="content">
          <Dashboard />
        </div>

      </div>

    </div>
  );
}

export default App;