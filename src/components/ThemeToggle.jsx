// Matrial UI components
import { IconButton } from "@mui/material";
// Icons
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

// My hooks
import { useColorMode } from "../contexts/AppUIContext";

export default function ThemeToggle() {
  const { mode, toggleColorMode } = useColorMode();
  return (
    <>
      <IconButton
        onClick={toggleColorMode}
        color="primary"
        sx={{ width: "fit-content" }}
      >
        {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </>
  );
}
