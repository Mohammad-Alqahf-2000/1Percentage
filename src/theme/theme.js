import { createTheme } from "@mui/material/styles";
import { tokens } from "./palette";
const darkPalette = {
  mode: "dark",
  primary: {
    main: tokens.primary,
    contrastText: tokens.pureBlack,
  },
  secondary: {
    main: tokens.pureWhite,
  },
  background: {
    default: tokens.charcoal,
    paper: tokens.darkGray,
    mainColor: tokens.primaryDark,
  },
  text: {
    primary: tokens.pureWhite,
    secondary: tokens.silverGray,
  },
};
const lightPalette = {
  mode: "light",
  primary: {
    main: tokens.primary,
    contrastText: tokens.pureWhite,
  },
  secondary: {
    main: tokens.charcoal,
  },
  background: {
    default: tokens.offWhite,
    paper: tokens.darkWhite,
    mainColor: tokens.primaryLight,
  },
  text: {
    primary: tokens.darkGray,
    secondary: tokens.mutedGray,
  },
};

export const getCustomTheme = (mode = "light", direction) => {
  return createTheme({
    direction: direction,
    palette: mode === "light" ? lightPalette : darkPalette,
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: '"Cairo", "Roboto" , sans-serif',
      h1: { fontWeight: 700 },
    },
    components: {
      MuiDrawer: {
        defaultProps: {
          anchor: direction === "rtl" ? "right" : "left",
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected": {
              backgroundColor: tokens.primarySoft,
              color: `${tokens.primary} !important`,
              "& .MuiListItemIcon-root": {
                color: tokens.primary,
              },
            },
            "&.Mui-selected:hover": {
              backgroundColor: tokens.primaryHalfA,
            },
          },
          paper: {
            right: direction === "rtl" ? 0 : "auto",
            left: direction === "rtl" ? "auto" : 0,
          },
        },
      },
    },
  });
};
