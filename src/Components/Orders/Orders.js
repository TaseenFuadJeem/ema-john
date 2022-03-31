import React from 'react';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import useCart from '../Hooks/useCart';
import useProducts from '../Hooks/useProducts';
import Order from '../Order-Summery/Order';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';

const Orders = () => {

    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItem>)
                }
            </div>
            <div className="order-container">
                <Order cart={cart}>
                    <Link to="/inventory">
                        <button>Go to Inventory</button>
                    </Link>
                </Order>
            </div>

        </div>
    );
};

export default Orders;