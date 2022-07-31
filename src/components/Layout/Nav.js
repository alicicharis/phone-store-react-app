import Button from "./NavButton";

import classes from "./Nav.module.css";

const Nav = (props) => {
  return (
    <div className={classes.nav}>
      <h1>iPhone Store</h1>
      <Button cartHandler={props.cartHandler} />
    </div>
  );
};

export default Nav;
