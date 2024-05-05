import { formatDistanceToNow } from "date-fns";
import { PropTypes } from "prop-types";

const AdvertisementDetail = ({ createdAt, name, photo, sale, price, tags }) => {
  const createdAtDate = new Date(createdAt);

  const formattedDate = formatDistanceToNow(createdAtDate, { addSuffix: true });

  return (
    <div className="advertisement">
      <div className="ad-name">{name}</div>
      <img
        className="ad-photo"
        src={
          photo
            ? photo
            : "https://cdn-icons-png.flaticon.com/512/3271/3271001.png"
        }
        alt="Advertisement Photo"
      />
      <div className="ad-sale">{sale ? "En venta" : "En compra"}</div>
      <div className="ad-price">{price} €</div>
      <div className="ad-tags">
        {tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
      <div className="ad-created-at">{formattedDate}</div>
    </div>
  );
};
AdvertisementDetail.propTypes = {
  createdAt: PropTypes.instanceOf(Date).isRequired,
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  sale: PropTypes.bool.isRequired,
  price: PropTypes.number.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default AdvertisementDetail;
