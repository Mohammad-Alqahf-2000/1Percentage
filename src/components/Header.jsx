// Material UI
import { Box, Stack, IconButton } from "@mui/material";
// Material Icons
import MenuIcon from "@mui/icons-material/Menu";

// My imports
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

// React
// import { useState } from "react";

// Material UI components
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";

// export default function Header({ children }) {
//   return (
//     <>
//       <AppBar position="static">
//         <Toolbar>{children}</Toolbar>
//       </AppBar>
//     </>
//   );
// }

export default function Header({ toggleHideShowSidebar }) {
  return (
    <>
      <IconButton
        onClick={toggleHideShowSidebar}
        sx={{
          position: "fixed",
          zIndex: 1,
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          m: "0.5rem",
          // mt: "2rem",
          ":hover": { backgroundColor: "background.mainColor" },
          width: "fit-content",
        }}
      >
        <MenuIcon />
      </IconButton>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "fit-content",
          paddingTop: 0.5,
          gap: 4,
          paddingX: 5,
          justifyContent: { xs: "center", md: "space-between" },
          flexDirection: "row-reverse",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        <Stack
          sx={{
            width: { xs: "100%", md: "fit-content" },
            justifyContent: "center",
          }}
          direction="row"
        >
          <LanguageToggle />
          <ThemeToggle />
        </Stack>
        <Stack
          sx={{
            width: { xs: "100%", md: "fit-content" },
            justifyContent: "center",
            marginX: { xs: 0, md: 10 },
          }}
        >
          //something here
        </Stack>
      </Box>
    </>
  );
}
