import React, { useState } from "react";
import "./Product.css";
import { useStateValue } from "../stateProvider/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
function Product({ id, title, price, rating, image }) {
  const [{}, dispatch] = useStateValue();
  const addToBasket = () => {
    //Add item to basket...
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  const stripePromise = loadStripe(
    "pk_test_51K8TyeSA4k3N3EwFkev9itWmqjgBb3JKGzm10zPbtBZD6JYlIE35d7Dgq6EHXnBl39XvnddS86oUV4v8lRI72Vev00LGYgw6WA"
  );
  const [loading, setLoading] = useState();
  const handleClick = async () => {
    setLoading(true);
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1K8hBASA4k3N3EwFN5SHAe4g",
          quantity: 1,
        },
      ],
      mode: "payment",
      cancelUrl: "http://localhost:3000",
      successUrl: "http://localhost:3000/home",
    });
    if (error) {
      setLoading(false);
      console.log("The error ", error);
    }
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((index) => (
              <i key={index} class="fa fa-star"></i>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={handleClick} disabled={loading}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
