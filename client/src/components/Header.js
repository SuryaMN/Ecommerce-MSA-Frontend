import React from "react";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

function Header() {
  return (
    <header id="header" className="header fixed-top d-flex align-items-center">
      <div className="d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          <img src="../../assets/img/logo.png" alt="" />
          <span className="d-none d-lg-block">Ecommerce Website</span>
        </a>
        <i className="bi bi-list toggle-sidebar-btn"></i>
      </div>

      <nav className="header-nav ms-auto">
        <ul className="d-flex align-items-center">
          <li className="nav-item dropdown pe-3">
            <a
              className="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                src="../../assets/img/profile-img.jpg"
                alt="Profile"
                className="rounded-circle"
              />
              <span className="d-none d-md-block dropdown-toggle ps-2">
                {jwt_decode(localStorage.getItem("token")).username}
              </span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li className="dropdown-header">
                <h6> {jwt_decode(localStorage.getItem("token")).username}</h6>
                <span>Web Designer</span>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i className="bi bi-person"></i>
                  <span>My Profile</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="users-profile.html"
                >
                  <i className="bi bi-gear"></i>
                  <span>Account Settings</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <a
                  className="dropdown-item d-flex align-items-center"
                  href="pages-faq.html"
                >
                  <i className="bi bi-question-circle"></i>
                  <span>Need Help?</span>
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>

              <li>
                <div className="dropdown-item d-flex align-items-center">
                  <i className="bi bi-box-arrow-right"></i>
                  <Link to="/logout">Logout</Link>
                </div>
              </li>
              {/* 
              <li>
                <form method="POST" action="{% url 'logoutuser' %}">
                  <button
                    className="dropdown-item d-flex align-items-center"
                    type="submit"
                  >
                    <i className="bi bi-box-arrow-right"></i>
                    <span>Log Out</span>
                  </button>
                </form>
              </li> */}
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
