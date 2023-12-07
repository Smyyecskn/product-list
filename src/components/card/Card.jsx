import StyledCard from "./card.module.scss";

const Card = ({ products }) => {
  return (
    <div className={StyledCard.product}>
      {products.map(({ id, title, description, image, price }) => (
        <div className={StyledCard.card} key={id}>
          <div className={StyledCard.price}>
            <h3>{price}</h3>
          </div>
          <img src={image} alt="" />
          <div className={StyledCard.cardOver}>
            <h2>{title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
