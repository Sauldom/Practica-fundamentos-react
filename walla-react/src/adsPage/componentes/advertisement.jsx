import formatDistanceToNow from "date-fns/formatDistanceToNow";

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
        <div className="tags">{tags.join(", ")}</div>
        <time dateTime={createdAt}>{formattedDate}</time>
      </div>
    </>
  );
};

export default Advertisement;
