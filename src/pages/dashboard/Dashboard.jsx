import React from "react";
import Header from "../../components/public/header/Header";
import DashboardComponent from "../../components/dashboard/dashboardComponent";
import "../../styles/dashboard/dashboard.css";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <Header />
      <DashboardComponent />
    </div>
  );
};

export default Dashboard;
