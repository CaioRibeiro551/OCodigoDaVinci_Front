import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { GlobalProvider } from "./contexts/GlobalContext";

export default function MainRouter() {
  return (
    <Routes>
      <GlobalProvider>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
      </GlobalProvider>
    </Routes>
  );
}
