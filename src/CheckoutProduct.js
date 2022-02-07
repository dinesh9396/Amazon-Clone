import React from 'react';
import './CheckoutProduct.css';
import {useStateValue} from "./StateProvider";

function CheckoutProduct({id, image, title, price, rating}) {
    
    const [{cart}, dispatch] = useStateValue();

    const removeFromCart = () => {
        dispatch({
            type:  'REMOVE_FROM_CART',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProductImage" 
                src={image} alt=""/>
            <div className="checkoutProductInfo">
                <p className="checkoutProductTitle">
                    {title}
                </p>
                <p className="checkoutProductPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProductRating">
                    {Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <p>⭐</p>
                    ))}
                </div>

                <button onClick={removeFromCart}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
