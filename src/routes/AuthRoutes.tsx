import { Routes, Route } from "react-router-dom";
import Sign from "../pages/auth/sign/sign";
import Login from "../pages/auth/login/login";

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path="/sign" element={<Sign />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
