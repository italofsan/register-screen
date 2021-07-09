import { Slide, ToastContainer } from "react-toastify";
import { CssBaseline } from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";

import { RegisterContextProvider } from "./contexts/RegisterContext";

import { Routes } from "./routes";

export function App() {
  return (
    <RegisterContextProvider>
      <Routes />
      <CssBaseline />
      <ToastContainer limit={3} transition={Slide} />
    </RegisterContextProvider>
  );
}

export default App;
