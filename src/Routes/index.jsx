import { Routes, Route } from "react-router-dom";

import LandingPage from "../Pages/LandingPage";
import LoginPage from "../Pages/LoginPage";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
export default Routers;
