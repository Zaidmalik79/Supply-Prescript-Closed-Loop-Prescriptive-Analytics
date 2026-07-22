import Navbar from "./assets/Navbar";
import Sidebar from "./assets/Sidebar";
import Dashboard from "./components/Dashboard";
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