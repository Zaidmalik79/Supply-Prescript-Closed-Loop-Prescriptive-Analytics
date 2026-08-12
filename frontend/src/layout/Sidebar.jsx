import "../styles/sidebar.css";

function Sidebar({ page, onPageChange }) {
  const menuItems = [
    {
      id: "dashboard",
      icon: "⌂",
      label: "Dashboard",
    },
    {
      id: "shipments",
      icon: "🚚",
      label: "Shipments",
    },
    {
      id: "prediction",
      icon: "🤖",
      label: "Prediction",
    },
    {
      id: "recommendation",
      icon: "💡",
      label: "Recommendation",
    },
  ];

  return (
    <aside className="sidebar">

      <div className="sidebar-menu">

        {menuItems.map((item) => (
          <button
            key={item.id}
            className={`sidebar-item ${
              page === item.id ? "active" : ""
            }`}
            onClick={() => onPageChange(item.id)}
          >
            <span className="sidebar-icon">
              {item.icon}
            </span>

            <span className="sidebar-label">
              {item.label}
            </span>
          </button>
        ))}

      </div>

    </aside>
  );
}

export default Sidebar;