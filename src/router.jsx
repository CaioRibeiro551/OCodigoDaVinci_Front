import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { useMainContext } from "./hooks/useMainContext";

function ProtectRoutes({ redirectTo }) {
  const { userLog } = useMainContext();

  return userLog.token ? <Outlet /> : <Navigate to={redirectTo} />;
}

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route element={<ProtectRoutes redirectTo="/" />}>
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}
