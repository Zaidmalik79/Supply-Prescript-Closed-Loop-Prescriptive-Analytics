import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";
import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        🚚 SupplyPrescript
      </div>

      <div className="search-box">
        <FaSearch />
        <input
          type="text"
          placeholder="Search..."
        />
      </div>

      <div className="navbar-right">

        <FaBell className="icon"/>

        <FaUserCircle className="user"/>

      </div>

    </nav>
  );
}

export default Navbar;