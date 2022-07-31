import ShopItem from "./ShopItem";
import classes from "./ShopItems.module.css";
import phoneImage from "../../img/iphone1.jpg";

const PRODUCTS = [
  {
    id: 1,
    name: "iPhone",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    price: 1999,
    image: phoneImage,
  },
  {
    id: 2,
    name: "iPhone",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    price: 1999,
    image: phoneImage,
  },
  {
    id: 3,
    name: "iPhone",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    price: 1999,
    image: phoneImage,
  },
  {
    id: 4,
    name: "iPhone",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    price: 1999,
    image: phoneImage,
  },
];

const ShopItems = () => {
  return (
    <div className={classes.shop}>
      <h1>Products</h1>
      <div className={classes.container}>
        {PRODUCTS.map((item) => (
          <ShopItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopItems;
