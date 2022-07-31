import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

import classes from "./NavButton.module.css";

const Button = (props) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${addedToCart ? classes.bump : ""} `;

  useEffect(() => {
    if (items.length === 0) return;

    setAddedToCart(true);

    const timeout = setTimeout(() => {
      setAddedToCart(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [items]);

  const cartClickHandler = () => {
    props.cartHandler();
  };

  return (
    <button className={btnClasses} onClick={cartClickHandler}>
      <h2>Cart</h2>
      <h2>{cartCtx.totalItems}</h2>
    </button>
  );
};

export default Button;
