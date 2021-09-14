import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider.js";
function CheckoutProduct(props){
    const[{basket},dispatch]=useStateValue();
    const removeFromCart=()=>{
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:props.id
        });
    }
    return(
        <div className="checkout_Product">
            <img
                src={props.image}
                alt=""
            />
            <div className="product_info">
                <p className="product_title">{props.title}</p>
                <p>
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                
                <div className="product_rating">
                    {Array(props.rating)
                        .fill()
                        .map(() => (
                        <p>🌟</p>
                        ))}
                </div>
                <button onClick={removeFromCart}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;