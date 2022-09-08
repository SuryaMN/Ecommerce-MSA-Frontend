import React from "react";

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="home">
            <i className="bi bi-house-door"></i>
            <span>Home</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link " href="dashboard">
            <i className="bi bi-grid"></i>
            <span>Dashboard</span>
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link " href="tickets">
            <i className="bi bi-stickies"></i>
            <span>Tickets</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
