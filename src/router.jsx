import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import { GlobalProvider } from "./contexts/GlobalContext";

export default function MainRouter() {
  return (
    <Routes>
      <GlobalProvider>
        <Route path="/" element={<SignUp />} />
      </GlobalProvider>
    </Routes>
  );
}
