import React from 'react';
import './Product.css';
import {useStateValue} from "./StateProvider";

function Product({id, title, image, price, rating }) {

    const [{cart}, dispatch] = useStateValue();

    console.log("this is cart list", cart)

    const addToCart = () => {

        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="productInfo">
                <p>{title}</p>
                <p className="productPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="productRating">
                    {Array(rating)
                    .fill()
                    .map((_, i) =>(
                        <p>⭐</p>
                    ))}
                    
                </div>

            </div>
            
            <img className="productImage"
                src={image}
                alt=""
            />

            {/* <button onClick={addToCart}>Add to Cart</button> */}
            <button onClick={addToCart}>Add To Cart</button>
        </div>
    );
};

export default Product
