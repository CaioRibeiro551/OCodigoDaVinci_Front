import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
    </Routes>
  );
}
