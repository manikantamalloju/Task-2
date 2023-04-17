import React from "react";
import "./Dashboard.css";
import { Button } from "react-bootstrap";
function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="side-navbar-container">
        <p>hi</p>
        <p>hello</p>
        <Button variant="primary">Hello</Button>
      </div>
      <div className="home-container"></div>
    </div>
  );
}

export default Dashboard;
