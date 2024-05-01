import { useEffect, useState } from "react";
import { getAds } from "../service/service.jsx";
import Advertisement from "./componentes/advertisement.jsx";
import Layout from "./componentes/layout/Layout.jsx";

function AdsPage() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    getAds().then((ads) => {
      setAds(ads);
      console.log(ads);
    });
  }, []);

  return (
    <Layout>
      <div className="titulo">Pagina de anuncios</div>
      <ul>
        {ads.map(({ id, ...ad }) => (
          <li key={id}>
            <Advertisement {...ad} />
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default AdsPage;
