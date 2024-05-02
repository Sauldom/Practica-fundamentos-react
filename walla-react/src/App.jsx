import AdsPage from "./adsPage/adsPage.jsx";
import LoginPage from "./loginPage/loginPage.jsx";

import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import NewAdsPage from "./newAdsPage/newAdsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/adverts" element={<AdsPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/adverts/new" element={<NewAdsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
