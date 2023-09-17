import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import ClientsPage from "./pages/ClientPage";

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/clients" element={<ClientsPage />} />
    </Routes>
  );
}
