import { Routes, Route } from 'react-router-dom';
// import SignUp from "./pages/SignUp";
// import SignIn from "./pages/SignIn";
import Home from './pages/Home';

export default function MainRouter() {
  return (
    <Routes>
      {/* <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<SignIn />} /> */}
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}
