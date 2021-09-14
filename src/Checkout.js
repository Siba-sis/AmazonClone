import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import CheckoutProduct from "./CheckoutProduct.js";
import { useStateValue } from "./StateProvider.js";

function Checkout() {
  const[{basket},dispatch]=useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <h2>Your Shopping Cart</h2>
        {basket.map((item)=>
          <CheckoutProduct
            id={item.id}
            price={item.price}
            rating={item.rating}
            title={item.title}
            image={item.image}
          />
        )}
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;