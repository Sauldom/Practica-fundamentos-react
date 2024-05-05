import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { PropTypes } from "prop-types";
import "./advertisementStyle.css";

const Advertisement = ({ createdAt, name, photo, sale, price, tags }) => {
  const formattedDate = formatDistanceToNow(new Date(createdAt), {
    addSuffix: true,
  });

  return (
    <>
      <div className="ad-container">
        <div className="ad-name">{name}</div>
        <img className="ad-photo" src={photo} alt="Foto del anuncio" />
        <div className="ad-sale"> {sale ? "En venta" : "En compra"}</div>
        <div className="ad-price">{price} €</div>
        <div className="tags">
          {tags.map((tag, index) => (
            <div key={index}>{tag}</div>
          ))}
        </div>
        <time dateTime={createdAt}>{formattedDate}</time>
      </div>
    </>
  );
};
Advertisement.propTypes = {
  createdAt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string,
  sale: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Advertisement;
