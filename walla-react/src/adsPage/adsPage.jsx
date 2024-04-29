import { useEffect, useState } from "react";
import { getAds } from "../service/service.jsx";
import Advertisement from "./componentes/advertisement.jsx";

function AdsPage() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    getAds().then((ads) => {
      setAds(ads);
      console.log(ads);
    });
  }, []);

  return (
    <>
      <div className="titulo">Pagina de anuncios</div>
      <ul>
        {ads.map(({ id, ...ad }) => (
          <li key={id}>
            <Advertisement {...ad} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default AdsPage;
