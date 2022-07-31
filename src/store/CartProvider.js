import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const addItemToCartHandler = (newItem) => {
    setShowSuccess(false);
    const exist = cartItems.find((item) => item.id === newItem.id);

    setTotalItems((previousNumber) => previousNumber + 1);
    setTotalPrice((previousPrice) => previousPrice + newItem.price);

    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === newItem.id
            ? {
                ...exist,
                quantity: exist.quantity + 1,
                totalPrice: exist.quantity + 1 * exist.price,
              }
            : item
        )
      );
    }
    if (!exist) {
      setCartItems([
        ...cartItems,
        { ...newItem, quantity: 1, totalPrice: newItem.price },
      ]);
    }
  };

  const removeItemFromCartHandler = (newItem) => {
    const exist = cartItems.find((item) => item.id === newItem.id);

    setTotalItems((previousNumber) => previousNumber - 1);
    setTotalPrice((previousPrice) => previousPrice - newItem.price);

    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== newItem.id));
    }

    if (exist.quantity !== 1) {
      setCartItems(
        cartItems.map((item) =>
          item.id === newItem.id
            ? {
                ...exist,
                quantity: exist.quantity - 1,
                totalPrice: exist.totalPrice - exist.price,
              }
            : item
        )
      );
    }
  };

  const placeOrderHandler = () => {
    setIsLoading(true);
    setCartItems([]);
    setTotalItems(0);
    setTotalPrice(0);

    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
    }, 2000);
  };

  const cartContext = {
    items: cartItems,
    addItemToCart: addItemToCartHandler,
    removeItemFromCart: removeItemFromCartHandler,
    placeOrder: placeOrderHandler,
    totalItems,
    totalPrice,
    isLoading,
    showSuccess,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
