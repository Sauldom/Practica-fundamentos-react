import AdsPage from "./adsPage/adsPage.jsx";
import LoginPage from "./loginPage/loginPage.jsx";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NewAdsPage from "./newAdsPage/newAdsPage.jsx";

function App({ isDefaultLogged }) {
  const [islogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
        <Route path="/adverts" element={<AdsPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/adverts/new" element={<NewAdsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
