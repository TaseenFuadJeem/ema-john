import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';

const ReviewItem = ({ product, handleRemoveProduct }) => {
    const { img, name, price, quantity, shipping } = product;
    return (
        <div className='review-item-container'>
            <div className="review-item-img">
                <img src={img} alt="" />
            </div>
            <div className="review-product-details">
                <div className="review-item-details">
                    <h3>{name}</h3>
                    <p>Price : ${price}</p>
                    <p>Quantity : {quantity}</p>
                    <p>Shipping charge : ${shipping}</p>
                </div>
                <div className="delete-button-container">
                    <button><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;