// React
import { useState, useMemo, useEffect } from "react";

// Router Imports
import { Outlet } from "react-router-dom";

// Material UI
import { Box, Stack, IconButton } from "@mui/material";

// Material UI
import PushPinIcon from "@mui/icons-material/PushPin";
// import MenuIcon from "@mui/icons-material/Menu";

// My Imports
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
// import ThemeToggle from "../components/ThemeToggle";
// import LanguageToggle from "../components/LanguageToggle";
import { useColorMode, useLanguage } from "../contexts/AppUIContext";

export default function RootLayout() {
  const { language } = useLanguage();
  const [sidebarHidden, setSidebarHidden] = useState(false);
  const [sidebarHovered, setSidebarHovered] = useState(false);
  const [sidebarPinned, setSidebarPinned] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isDark = useColorMode().mode === "dark";

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth <= 768) {
        setSidebarPinned(true);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  const isLargeScreen = windowWidth > 768;

  const sidebarWidth = useMemo(() => {
    return sidebarPinned || sidebarHovered ? 240 : 56;
  }, [sidebarPinned, sidebarHovered]);

  // Handlers
  const toggleHideShowSidebar = () => {
    setSidebarHidden(!sidebarHidden);
  };
  const togglePinUnpinSidebar = () => {
    if (window.innerWidth > 768) {
      setSidebarPinned(!sidebarPinned);
    } else {
      setSidebarPinned(true);
    }
  };
  const handleHoveredSidebar = () => {
    if (window.innerWidth > 768) {
      setSidebarHovered(true);
    }
  };
  const handleNonHoveredSidebar = () => {
    if (window.innerWidth > 768) {
      setSidebarHovered(false);
    }
  };
  const handleToggleSidebarClose = () => {
    setSidebarHidden(false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        // flexDirection: "column",
        width: "100%",
        height: "100%",
        overflowX: "hidden",
      }}
    >
      <Sidebar
        sidebarHidden={sidebarHidden}
        sidebarWidth={sidebarWidth}
        sidebarPinned={sidebarPinned}
        sidebarHovered={sidebarHovered}
        handleHoveredSidebar={handleHoveredSidebar}
        handleNonHoveredSidebar={handleNonHoveredSidebar}
        handleToggleSidebarClose={handleToggleSidebarClose}
        isLargeScreen={isLargeScreen}
      >
        {isLargeScreen ? (
          <Stack direction="row">
            {sidebarHidden ? (
              ""
            ) : (
              <IconButton
                size="small"
                sx={{
                  transition:
                    "box-shadow 0.3s ease-in-out, background-color 0.2s ease-in-out",
                  boxShadow: sidebarPinned
                    ? isDark
                      ? "inset 0 6px 12px rgba(0,0,0,0.7)"
                      : "inset 0 2px 6px rgba(0,0,0,0.3)"
                    : "none",
                  display: {},
                }}
                onClick={togglePinUnpinSidebar}
              >
                <PushPinIcon
                  sx={{
                    transformOrigin: "center",
                    transform: sidebarPinned ? "rotate(0deg)" : "rotate(45deg)",
                  }}
                />
              </IconButton>
            )}
          </Stack>
        ) : (
          ""
        )}
      </Sidebar>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          width: `100%`,
          marginLeft:
            language === "en" && !sidebarHidden ? `${sidebarWidth}px` : "0px",
          marginRight:
            language === "ar" && !sidebarHidden ? `${sidebarWidth}px` : "0px",

          height: "100%",
          transition: "margin 0.3s ease",
          paddingY: "0.5rem",
          paddingX: "0.5rem",
          overflow: "auto",
        }}
      >
        {/* <IconButton
          onClick={toggleHideShowSidebar}
          sx={{
            position: "fixed",
            zIndex: 1,
            backgroundColor: "primary.main",
            color: "primary.contrastText",
            m: "1rem",
            // mt: "2rem",
            ":hover": { backgroundColor: "background.mainColor" },
          }}
        >
          <MenuIcon />
        </IconButton> */}
        <Header toggleHideShowSidebar={toggleHideShowSidebar} />
        <Outlet />
      </Box>
    </Box>
  );
}
