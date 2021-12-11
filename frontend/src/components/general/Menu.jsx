import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          {/* Brand Logo */}
          <a href="/" className="brand-link">
            <img
              src="http://localhost:3000/logo512.png"
              alt="Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8" }}
            />
            <span className="brand-text font-weight-light">
              User Management
            </span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}

                <li className="nav-item">
                  <a href="/persons" className="nav-link">
                    <i className="fas fa-circle nav-icon" />
                    <p>List</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/add/_add" className="nav-link">
                    <i className="fas fa-circle nav-icon" />
                    <p>Create</p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
