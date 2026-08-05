import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function RegionChart({ data }) {
  return (
    <div className="chart-card">
      <h3>Orders by Region</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="region" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="orders"
            fill="#2563eb"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RegionChart;