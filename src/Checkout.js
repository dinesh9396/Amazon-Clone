import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {
    const [{cart}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout_left">
                <div >
                    <h2 className="checkout_title">
                        Your Amazon Cart
                    </h2>

                    {cart.map(item => (
                        <CheckoutProduct
                            id = {item.id}
                            title = {item.title}
                            image = {item.image}
                            price = {item.price}
                            rating = {item.rating}
                        />
                    ))}
                </div>
            </div>

            <div className="checkout_right">
                <Subtotal/>
            </div>            
        </div>
    )
}

export default Checkout
