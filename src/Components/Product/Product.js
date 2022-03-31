import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = (props) => {
    const { name, img, seller, price, ratings, shipping } = props.product;
    return (
        <div className='product'>
            <div className='product-info'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price : $ {price}</h4>
                <p>Shipping price : $ {shipping}</p>
                <p>Seller : {seller}</p>
                <p>Ratings : {ratings} out of 5</p>
                <button onClick={() => props.HandleAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
            </div>
        </div>
    );
};

export default Product;