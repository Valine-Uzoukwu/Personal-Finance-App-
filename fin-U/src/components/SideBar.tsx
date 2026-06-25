// Import Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";
// Import NavLink for client-side routing with active state detection
import { NavLink } from "react-router-dom";
import "./SideBar.css";

// Navigation sidebar with active route detection
const SideBar = () => {
  return (
    // Sidebar container: flex column layout, doesn't shrink, dark theme, and responsive padding
    <div className="sidebar d-flex flex-column flex-shrink-0 p-3">
      <span className="navbar-brand fs-4">FinU</span>
      <hr />
      {/* Navigation list: nav pills (Bootstrap style) in a vertical column */}
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <NavLink
            to="/dashboard"
            // end prop ensures exact path matching (only active for /dashboard, not /dashboard/anything)
            end
            // Dynamically apply "active" class based on whether the current route matches
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            Dashboard
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/income"
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            Income
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/expenses"
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            Expenses
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/assets"
            className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
          >
            Assets
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
