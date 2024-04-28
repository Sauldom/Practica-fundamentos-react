import AdsPage from "./adsPage/adsPage.jsx";
import LoginPage from "./loginPage/loginPage.jsx";
import { Suspense, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [islogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(true);
  return (
    <Suspense fallback="loading">
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/ads" element={<AdsPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
