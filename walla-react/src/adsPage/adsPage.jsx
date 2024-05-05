import { useEffect, useState } from "react";
import { getAds } from "../service/service.jsx";
import Advertisement from "./componentes/advertisement.jsx";
import Layout from "./componentes/layout/Layout.jsx";
import { Link } from "react-router-dom";

function AdsPage() {
  const [ads, setAds] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    sale: true,
  });
  const [modAds, setModAds] = useState([]);

  const handleFilters = (event) => {
    setFilters({ ...filters, name: event.target.value });
  };
  useEffect(() => {
    const filteredAds = ads.filter((ad) => {
      return ad.name.toLowerCase().includes(filters.name.toLowerCase());
    });
    setModAds(filteredAds);
  }, [filters, ads, setModAds]);
  useEffect(() => {
    getAds().then((ads) => {
      setAds(ads);
      setModAds(ads);
    });
  }, [setModAds]);

  return (
    <Layout>
      <div className="titulo">Pagina de anuncios</div>
      <form className="from-filter">
        <div className="filters">
          <label htmlFor="name">Filtrar por nombre:</label>
          <input
            type="text"
            placeholder="Filtrar por nombre"
            value={filters.name}
            onInput={handleFilters}
          />
        </div>
      </form>

      {ads.length ? (
        <ul>
          {modAds.map(({ id, ...ad }) => (
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
