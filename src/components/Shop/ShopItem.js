import { useContext } from "react";

import CartContext from "../../store/cart-context";
import classes from "./ShopItem.module.css";

const ShopItem = (props) => {
  const cartCtx = useContext(CartContext);

  const { id, image, name, price, description } = props;

  const addToCartHandler = () => {
    cartCtx.addItemToCart({
      id,
      image,
      name,
      price,
      description,
    });
  };

  return (
    <div className={classes.card}>
      <img src={props.image} alt="phone" />
      <h2>{props.name}</h2>
      <h3>${props.price}</h3>
      <p>{props.description}</p>
      <button onClick={addToCartHandler} className={classes.button}>
        ADD TO CART
      </button>
    </div>
  );
};

export default ShopItem;
