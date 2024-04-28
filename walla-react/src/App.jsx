import AdsPage from "./adsPage/adsPage.jsx";
import LoginPage from "./loginPage/loginPage.jsx";
import { useState } from "react";

function App() {
  const [islogged, setIsLogged] = useState(false);
  const handleLogin = () => setIsLogged(true);
  return (
    <>
      {/* <AdsPage />*/}
      <LoginPage onLogin={handleLogin} />
    </>
  );
}

export default App;
