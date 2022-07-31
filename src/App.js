import { Fragment, useState } from "react";
import Nav from "./components/Layout/Nav";
import ShopItems from "./components/Shop/ShopItems";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const cartClickHandler = () => {
    setCartIsShown((prevstate) => !prevstate);
  };

  return (
    <Fragment>
      <CartProvider>
        {cartIsShown && <Cart cartHandler={cartClickHandler} />}
        <Nav cartHandler={cartClickHandler} />
        <ShopItems />
      </CartProvider>
    </Fragment>
  );
}

export default App;
