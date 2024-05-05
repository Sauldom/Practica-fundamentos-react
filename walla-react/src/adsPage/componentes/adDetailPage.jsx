import { useNavigate, useParams } from "react-router-dom";
import Layout from "./layout/Layout";
import { useEffect, useState } from "react";
import { deleteAd, getAdsDetail } from "../../service/service.jsx";
import Button from "./StyledButton.jsx";
import AdvertisementDetail from "./adDetailAd.jsx";

function AdDetailPage() {
  const params = useParams();
  const [ad, setAd] = useState(null);
  const navigate = useNavigate();
  const handleDelete = () => {
    setShowConfirm(true);
  };
  const confirmDelete = () => {
    deleteAd(ad.id);
    setShowConfirm(false);
    navigate("/adverts");
  };
  const cancelDelete = () => {
    setShowConfirm(false);
  };
  const [showConfirm, setShowConfirm] = useState(false);
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
  }, [params.id, navigate]);
  return (
    <Layout>
      <div className="titulo-detalle">Página de detalle de anuncio</div>
      {ad ? (
        <AdvertisementDetail
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
      <Button onClick={handleDelete}>Desea borrar</Button>
      {showConfirm && (
        <div>
          <p>¿Estás seguro de que deseas borrar este anuncio?</p>
          <Button className="delete-button" onClick={confirmDelete}>
            Sí
          </Button>
          <Button className="delete-button" onClick={cancelDelete}>
            Cancelar
          </Button>
        </div>
      )}
    </Layout>
  );
}

export default AdDetailPage;
