// Matrial UI Components
import { Button } from "@mui/material";
// Icons
import LanguageIcon from "@mui/icons-material/Language";

import { useLanguage } from "../contexts/AppUIContext";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <>
      <Button
        onClick={toggleLanguage}
        variant="outlined"
        sx={{ gap: 1, width: "fit-content" }}
      >
        <LanguageIcon />
        {language === "en" ? "العربية" : "English"}
      </Button>
    </>
  );
}
