import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

// function ProtectRoutes({ redirectTo }) {
//   const { user } = useMyContext();

//   return user.token ? <Outlet /> : <Navigate to={redirectTo} />;
// }

export default function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />

      <Route path="/home" element={<Home />} />
      {/* <Route element={<ProtectRoutes redirectTo={"/"} />}>
        <Route path="/home" element={<Home />} />
      </Route> */}
    </Routes>
  );
}
