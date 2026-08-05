import CountUp from "react-countup";
import "../styles/dashboard.css";

function StatCard({ title, value, color }) {
  return (
    <div className="stat-card" style={{ borderTop: `5px solid ${color}` }}>
      <h4>{title}</h4>

      <h2>
        <CountUp
          end={value}
          duration={2}
          separator=","
        />
      </h2>
    </div>
  );
}

export default StatCard;