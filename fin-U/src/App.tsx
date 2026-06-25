import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import "./App.css";

// TODO: Replace with actual page components when created
const Dashboard = () => <div className="content p-4">Dashboard page</div>;
const Income = () => <div className="content p-4">Income page</div>;
const Expenses = () => <div className="content p-4">Expenses page</div>;
const Assets = () => <div className="content p-4">Assets page</div>;

// Main app with routing: sidebar + main content area
function App() {
  return (
    <BrowserRouter>
      {/* Main app container: flex layout with sidebar on left, content on right */}
      <div className="app d-flex">
        {/* Sidebar navigation component */}
        <SideBar />
        {/* Main content area: flex-fill makes it take remaining space */}
        <main className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/income" element={<Income />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/assets" element={<Assets />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
