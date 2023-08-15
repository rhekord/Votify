import React from "react";
import "./Dashboard.css";
import Sidebar from "./Sidebar";
import DashboardOptions from "./DashboardOptions";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <DashboardOptions />
    </div>
  );
}
