import { useEffect, useState } from "react";
import { getAds } from "../service/service.jsx";
import Advertisement from "./componentes/advertisement.jsx";
import Layout from "./componentes/layout/Layout.jsx";
import { Link } from "react-router-dom";
import "./adsPageStyle.css";

function AdsPage() {
  const [ads, setAds] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    sale: "todos",
  });
  const [modAds, setModAds] = useState([]);

  const handleSaleChange = (event) => {
    setFilters({ ...filters, sale: event.target.value });
  };

  const handleFilters = (event) => {
    setFilters({ ...filters, name: event.target.value });
  };
  useEffect(() => {
    const filteredAds = ads.filter((ad) => {
      const nameFilter = ad.name
        .toLowerCase()
        .includes(filters.name.toLowerCase());
      const saleFilter =
        filters.sale === "todos" || ad.sale === (filters.sale === "venta");
      return nameFilter && saleFilter;
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
      <h1 className="titulo">Pagina de anuncios</h1>
      <form className="from-filter">
        <div className="filters">
          <label htmlFor="name">Filtrar por nombre:</label>
          <input
            type="text"
            placeholder="Filtrar por nombre"
            value={filters.name}
            onInput={handleFilters}
          />{" "}
          <br />
          <label htmlFor="venta-checkbox" className="venta-checkbox">
            Filtrar por venta
          </label>
          <label>
            <input
              type="radio"
              value="venta"
              checked={filters.sale === "venta"}
              onChange={handleSaleChange}
            />
            Venta
          </label>
          <label>
            <input
              type="radio"
              value="compra"
              checked={filters.sale === "compra"}
              onChange={handleSaleChange}
            />
            Compra
          </label>
          <label>
            <input
              type="radio"
              value="todos"
              checked={filters.sale === "todos"}
              onChange={handleSaleChange}
            />
            Todos
          </label>
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
