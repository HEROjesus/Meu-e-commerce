import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Sign from "../pages/auth/sign/sign";

export default function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/sign" element={<Sign />} />
      </Routes>
    </Router>
  );
}
