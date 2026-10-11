import "./App.css";

// Material UI

// i18n

// Route imports
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.jsx";

// My Components

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
