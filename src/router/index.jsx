import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Today from "../pages/Today";
import ThisWeek from "../pages/ThisWeek";
import MyHabits from "../pages/MyHabits";
import Settings from "../pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <h1>Error</h1>,
    children: [
      { index: true, element: <Today /> },
      { path: "this-week", element: <ThisWeek /> },
      { path: "my-habits", element: <MyHabits /> },
      { path: "settings", element: <Settings /> },
    ],
  },
]);
