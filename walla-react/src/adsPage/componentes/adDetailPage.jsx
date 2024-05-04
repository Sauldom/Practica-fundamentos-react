import { useNavigate, useParams } from "react-router-dom";
import Layout from "./layout/Layout";
import { useEffect, useState } from "react";
import { getAdsDetail } from "../../service/service.jsx";
import Advertisement from "./advertisement.jsx";

function AdDetailPage() {
  const params = useParams();
  const [ad, setAd] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function getAdsDetailFromService() {
      try {
        const ad = await getAdsDetail(params.id);
        setAd(ad);
      } catch (error) {
        if (error.status === 404) {
          navigate("/404");
        }
      }
    }
    getAdsDetailFromService();
  }, [params.id]);
  return (
    <Layout>
      <div className="titulo-detalle">Página de detalle de anuncio</div>
      {ad ? (
        <Advertisement
          id={ad.id}
          createdAt={ad.createdAt}
          name={ad.name}
          photo={ad.photo}
          sale={ad.sale}
          price={ad.price}
          tags={ad.tags}
        />
      ) : (
        <div>Cargando...</div>
      )}
    </Layout>
  );
}

export default AdDetailPage;
