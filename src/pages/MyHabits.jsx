// Material UI
import { Stack } from "@mui/material";
// import { useState } from "react";

import { useTranslation } from "react-i18next";
export default function MyHabits() {
  const { t } = useTranslation();
  // const [habits, setHabits] = useState([
  //   {
  //     id: 1,
  //     name: "Reading",
  //     target: "8",
  //     unit: "page",
  //   },
  // ]);
  return (
    <>
      <Stack>
        
        <p>{t("Hello world!!!")}</p>
      </Stack>
    </>
  );
}
