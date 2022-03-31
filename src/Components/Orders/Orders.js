import React from 'react';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import './Orders.css';

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    return (
        <div>
            <h1>This is orders : {products.length}</h1>
            <h1>This is cart : {cart.length}</h1>
        </div>
    );
};

export default Orders;