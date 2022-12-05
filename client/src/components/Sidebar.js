import React from "react";

function Sidebar() {
  return (
    <aside id="sidebar" className="sidebar">
      <ul className="sidebar-nav" id="sidebar-nav">
        <li className="nav-item">
          <a className="nav-link " href="/inventory">
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
          <a className="nav-link " href="addProduct">
            <i className="bi bi-stickies"></i>
            <span>Add Product</span>
          </a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link " href="cart">
            <i className="bi bi-cart"></i>
            <span>Cart</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
