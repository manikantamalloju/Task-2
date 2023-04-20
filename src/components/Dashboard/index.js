import React from "react";

import BarCharts from "../BarCharts";
import SideBar from "../SiderBar";
// import ColumnCharts from "../ColumnCharts/index";
import "./index.css";

function Dashboard() {
  return (
    <>
      <SideBar />
      {/* <p>dasbord in graphs</p> */}
      {/* <h1>hi</h1> */}
      <BarCharts />
    </>
  );
}

export default Dashboard;
