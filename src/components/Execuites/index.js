import React from "react";

import SideBar from "../SiderBar";
import AdminTable from "../AdminTable/index";
import "./index.css";
import { Box } from "@mui/system";

function Execuites() {
  return (
    <div>
      <SideBar />
      {/* <h1>Dashboard</h1> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        

        <AdminTable />
      </Box>
    </div>
  );
}

export default Execuites;
