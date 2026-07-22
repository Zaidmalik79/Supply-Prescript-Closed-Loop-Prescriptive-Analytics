function Shipments() {

  const shipments = [
    {
      id: 101,
      region: "Western Europe",
      mode: "Standard Class",
      sales: 250,
      status: "Late"
    },
    {
      id: 102,
      region: "Pacific Asia",
      mode: "First Class",
      sales: 480,
      status: "On Time"
    },
    {
      id: 103,
      region: "US Center",
      mode: "Second Class",
      sales: 620,
      status: "Late"
    },
    {
      id: 104,
      region: "South Asia",
      mode: "Standard Class",
      sales: 330,
      status: "On Time"
    }
  ];

  return (
    <div
      style={{
        marginTop: 30,
        background: "white",
        padding: 20,
        borderRadius: 10
      }}
    >
      <h2>Recent Shipments</h2>

      <table
        border="1"
        cellPadding="10"
        width="100%"
        style={{ borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Region</th>
            <th>Shipping Mode</th>
            <th>Sales</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {shipments.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.region}</td>
              <td>{item.mode}</td>
              <td>${item.sales}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default Shipments;