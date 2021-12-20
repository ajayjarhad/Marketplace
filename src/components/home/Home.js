import React from "react";
import "./Home.css";
import Product from "../product/Product.js";
import { products } from "../../products";
function Home() {
  return (
    <div className="home">
      {/*product id, title, price, rating */}

      <div className="home__row">
        {products.map((item) => {
          return (
            <Product
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
