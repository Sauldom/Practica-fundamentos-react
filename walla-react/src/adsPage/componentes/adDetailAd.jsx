import { formatDistanceToNow } from "date-fns";

const AdvertisementDetail = ({
  id,
  createdAt,
  name,
  photo,
  sale,
  price,
  tags,
}) => {
  const createdAtDate = new Date(createdAt);

  const formattedDate = formatDistanceToNow(createdAtDate, { addSuffix: true });

  return (
    <div className="advertisement">
      <div className="ad-name">{name}</div>
      <img className="ad-photo" src={photo} alt="Advertisement Photo" />
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

export default AdvertisementDetail;
