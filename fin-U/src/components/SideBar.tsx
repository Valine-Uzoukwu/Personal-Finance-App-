import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SideBar.css";
const SideBar = () => {
  return (
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3">
      <span className="navbar-brand fs-4">FinU</span>
    
      <hr />
      <ul className="nav nav-pills flex-column ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Dashboard
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Income
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Expenses
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Assets
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
