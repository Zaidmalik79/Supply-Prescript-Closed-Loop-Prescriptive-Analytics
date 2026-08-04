import { Link } from "react-router-dom";
import {
  FaHome,
  FaTruck,
  FaRobot,
  FaLightbulb,
} from "react-icons/fa";

import "../styles/sidebar.css";
function Sidebar(){

    return(

        <aside className="sidebar">

            <Link to="/">
                <FaHome/> Dashboard
            </Link>

            <Link to="/shipments">
                <FaTruck/> Shipments
            </Link>

            <Link to="/prediction">
                <FaRobot/> Prediction
            </Link>

            <Link to="/recommendation">
                <FaLightbulb/> Recommendation
            </Link>

        </aside>

    )

}

export default Sidebar;