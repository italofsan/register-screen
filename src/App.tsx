import { Slide, ToastContainer } from "react-toastify";
import { CssBaseline } from "@material-ui/core";
import "react-toastify/dist/ReactToastify.css";
import { Routes } from "./routes";

export function App() {
  return (
    <>
      <Routes />
      <CssBaseline />
      <ToastContainer limit={3} transition={Slide} />
    </>
  );
}

export default App;
