import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", late: 120 },
  { month: "Feb", late: 98 },
  { month: "Mar", late: 150 },
  { month: "Apr", late: 110 },
  { month: "May", late: 170 },
  { month: "Jun", late: 140 },
];

function Charts() {
  return (
    <div
      style={{
        background: "#fff",
        padding: "20px",
        marginTop: "30px",
        borderRadius: "10px",
      }}
    >
      <h2>Late Deliveries by Month</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="late" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Charts;