import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import { useMainContext } from "./hooks/useMainContext";
import ClientsPage from "./pages/ClientPage";

function ProtectRoutes() {
  const { userLog } = useMainContext();

  return userLog.token ? <Outlet /> : <Navigate to="/" />;
}

function NotProtectedRoutes() {
  const { userLog } = useMainContext();

  return userLog.token ? <Navigate to="home" /> : <Outlet />;
}

export default function MainRouter() {
  return (
    <Routes>
      <Route element={<NotProtectedRoutes />}>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route element={<ProtectRoutes />}>
        <Route path="/home" element={<Home />} />
        <Route path="/clients" element={<ClientsPage />} />
      </Route>
    </Routes>
  );
}
