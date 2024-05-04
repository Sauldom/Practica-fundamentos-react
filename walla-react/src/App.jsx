import AdsPage from "./adsPage/adsPage.jsx";
import LoginPage from "./loginPage/loginPage.jsx";

import { Route, Routes, Navigate, Outlet } from "react-router-dom";
import NewAdsPage from "./newAdsPage/newAdsPage.jsx";
import AdDetailPage from "./adsPage/componentes/adDetailPage.jsx";
import AuthRoute from "./authorize/components/ProtectRoutes.jsx";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/adverts"
        element={
          <AuthRoute>
            <div className="outlet-container">
              <Outlet />
            </div>
          </AuthRoute>
        }
      >
        <Route index element={<AdsPage />} />
        <Route path=":id" element={<AdDetailPage />} />
        <Route path="new" element={<NewAdsPage />} />
      </Route>

      <Route path="/" element={<Navigate to="/login" />} />

      <Route path="*" element={<Navigate to="404" />} />
      <Route path="/404" element={<div>404 Not found</div>} />
    </Routes>
  );
}

export default App;
