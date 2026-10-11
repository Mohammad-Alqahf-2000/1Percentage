// React
// import { useState } from "react";

// Material UI components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Header({ children }) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>{children}</Toolbar>
      </AppBar>
    </>
  );
}
