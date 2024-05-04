import { useEffect, useState } from "react";
import { getAds } from "../service/service.jsx";
import Advertisement from "./componentes/advertisement.jsx";
import Layout from "./componentes/layout/Layout.jsx";
import { Link } from "react-router-dom";

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
      {ads.length ? (
        <ul>
          {ads.map(({ id, ...ad }) => (
            <li key={id}>
              <Link to={`/adverts/${id}`}>
                <Advertisement {...ad} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul>Se el primero en crear el anuncio</ul>
      )}
    </Layout>
  );
}

export default AdsPage;
