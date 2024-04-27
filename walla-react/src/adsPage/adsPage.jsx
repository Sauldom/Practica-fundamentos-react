import { useEffect, useState } from "react";
import { getAds } from "../service/service.jsx";

function AdsPage() {
  const [ads, setAds] = useState([]);
  useEffect(() => {
    getAds().then((ads) => setAds(ads));
  }, []);

  return (
    <>
      <div className="titulo">Pagina de anuncios</div>
      <ul>
        {ads &&
          ads.map((ads) => {
            <li key={ads.id}>{ads.name}</li>;
          })}
      </ul>
    </>
  );
}

export default AdsPage;
