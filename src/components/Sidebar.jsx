// Material UI Components
import {
  Stack,
  Box,
  // Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

// Material Icons
import TodayIcon from "@mui/icons-material/Today";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
// import EmojiObjectsOutlinedIcon from "@mui/icons-material/EmojiObjectsOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

// Route-dom imports
import { Link as RouterLink, useLocation } from "react-router-dom";

// Translate
import { useTranslation } from "react-i18next";

// My Imports
import shortLogo from "../assets/images/logo.png";
import longLogoLight from "../assets/images/long-logo.png";
import longLogoDark from "../assets/images/long_logo_dark.png";
import { useColorMode, useLanguage } from "../contexts/AppUIContext";

// import { useState } from "react";

const links = [
  {
    id: "1",
    lable: "today",
    icon: <TodayIcon />,
    link: "/",
  },
  {
    id: "2",
    lable: "this week",
    icon: <EventNoteOutlinedIcon />,
    link: "/this-week",
  },
  {
    id: "3",
    lable: "habits",
    icon: <PsychologyOutlinedIcon />,
    link: "/my-habits",
  },
  {
    id: "4",
    lable: "settings",
    icon: <SettingsOutlinedIcon />,
    link: "/settings",
  },
];
export default function Sidebar({
  children,
  sidebarHidden,
  sidebarWidth,
  sidebarPinned,
  sidebarHovered,
  handleHoveredSidebar,
  handleNonHoveredSidebar,
  isLargeScreen,
}) {
  const { mode } = useColorMode();
  const { t } = useTranslation();
  const isRTL = useLanguage().direction === "rtl";
  const location = useLocation();

  const isActive = (link) => {
    return location.pathname === link;
  };
  return (
    <>
      <Box
        sx={{
          display: sidebarHidden ? "hidden" : "flex",
          width: !sidebarHidden ? `${sidebarWidth}px` : "0px",
          flexDirection: "column",
          justifyContent: "",
          alignItems: "center",
          height: "100%",
          position: "fixed",
          backgroundColor: "background.paper",
          transition: "width 0.3s ease",
          boxShadow: "1px 8px 20px rgba(0, 0, 0, 0.5)",
          padding: "0px",
          zIndex: 1,
        }}
        onMouseEnter={() => handleHoveredSidebar()}
        onMouseLeave={() => handleNonHoveredSidebar()}
      >
        {/* Head */}
        <Box
          sx={{
            width: "100%",
            mx: "",
            display: sidebarHidden ? "none" : "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent:
              (sidebarPinned || sidebarHovered) && isLargeScreen
                ? "space-between"
                : "center",
            flexWrap: "no-wrap",
            height: "fit-content",
            padding: "0px",
          }}
        >
          <Stack
            sx={{
              // width: sidebarPinned || sidebarHovered ? "100%" : "100%",
              width: "85%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <Stack
              direction="row"
              sx={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            > */}
            <img
              src={shortLogo}
              alt="short-image"
              style={{
                display: !(sidebarPinned || sidebarHovered) ? "flex" : "none",
                width: "3.2rem",
                height: "3.4rem",
              }}
            />
            <img
              src={longLogoLight}
              alt="logo-image-light"
              style={{
                display:
                  (sidebarPinned || sidebarHovered) && mode == "light"
                    ? "flex"
                    : "none",
                width: "100%",
                height: "3.8rem",
              }}
            />
            <img
              src={longLogoDark}
              alt="logo-image-dark"
              style={{
                display:
                  (sidebarPinned || sidebarHovered) && mode == "dark"
                    ? "flex"
                    : "none",
                width: "100%",
                height: "3.8rem",
              }}
            />
            {/* </Stack> */}
          </Stack>
          <Stack
            sx={{
              width:
                (sidebarPinned || sidebarHovered) && isLargeScreen
                  ? "15%"
                  : "0%",
              display: sidebarPinned || sidebarHovered ? "flex" : "none",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              mx: "5px",
            }}
          >
            {children}
          </Stack>
        </Box>

        {/* Body */}
        <Box
          sx={{
            width: "100%",
            display: sidebarHidden ? "none" : "",
            overflow: "auto",
          }}
        >
          <List>
            {links.map((link) => {
              return (
                <ListItem key={link.id} disablePadding>
                  <ListItemButton
                    component={RouterLink}
                    to={link.link}
                    sx={{ gap: 1 }}
                    selected={isActive(link.link)}
                  >
                    <ListItemIcon>{link.icon}</ListItemIcon>
                    {sidebarPinned || sidebarHovered ? (
                      // <ListItemText primary={t(`${link.lable}`)} />
                      <ListItemText
                        sx={{ textAlign: isRTL ? "right" : "left" }}
                        primary={t(`sidebar.${link.lable}`)}
                      />
                    ) : (
                      ""
                    )}
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Box>
    </>
  );
}
