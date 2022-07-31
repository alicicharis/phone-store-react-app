import { useContext } from "react";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import LoadingSpinner from "../UI/LoadingSpinner";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const { isLoading, showSuccess } = cartCtx;

  const removeFromCartHandler = (item) => {
    cartCtx.removeItemFromCart(item);
  };

  const addItemToCartHandler = (item) => {
    cartCtx.addItemToCart(item);
  };

  const placeOrderHandler = () => {
    cartCtx.placeOrder();
  };

  return (
    <Modal cartHandler={props.cartHandler}>
      {cartCtx.items.length > 0 && <h1>Cart</h1>}
      {cartCtx.items.length === 0 && !isLoading && !showSuccess && (
        <h1>Your Cart Is Empty</h1>
      )}
      {isLoading && <h1>Placing Your Order...</h1>}
      {isLoading && <LoadingSpinner />}
      {showSuccess && <h1>Your Order Is Placed!</h1>}
      <ul>
        {cartCtx.items.map((item) => (
          <div key={item.id} className={classes.item}>
            <div>
              <img className={classes.image} src={item.image} alt="phone" />
            </div>
            <div>
              <h2>{item.name}</h2>
              <h3>${item.price}</h3>
              <p className={classes.description}>{item.description}</p>
              <div className={classes.quantity}>
                <div className={classes.flex}>
                  <h3>Quantity: {item.quantity}</h3>
                  <button
                    className={classes.button}
                    onClick={() => removeFromCartHandler(item)}
                  >
                    -
                  </button>
                  <button
                    className={classes.button}
                    onClick={() => addItemToCartHandler(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
      {cartCtx.items.length > 0 && (
        <div>
          <h3 className={classes.total}>Total Price: ${cartCtx.totalPrice}</h3>
          <button
            onClick={placeOrderHandler}
            className={classes["button-order"]}
          >
            Place Order
          </button>
        </div>
      )}
    </Modal>
  );
};

export default Cart;
