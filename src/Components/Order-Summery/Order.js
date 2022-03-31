import React from 'react';
import './Order.css';

const Order = (props) => {

    const { cart } = props;

    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for (const product of cart) {
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }

    const tax = Number((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;

    return (
        <div className='order-summery'>
            <h1>Order Summery</h1>
            <p>Selected items : {quantity}</p>
            <p>Total Price : $ {total}</p>
            <p>Total Shipping : $ {shipping}</p>
            <p>Tax : $ {tax}</p>
            <h3>Grand Total : $ {grandTotal}</h3>
        </div>
    );
};

export default Order;