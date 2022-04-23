import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import useProducts from '../Hooks/useProducts';
import Order from '../Order-Summery/Order';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useState([])



    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
                // console.log(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])

    const HandleAddToCart = (selectedProduct) => {
        const exists = cart.find(product => product._id === selectedProduct._id);
        let newCart = [];
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedProduct._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct._id);

    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        HandleAddToCart={HandleAddToCart}
                    ></Product>)
                }

            </div>
            <div className='order-container'>
                <Order cart={cart}>
                    <Link to="/orders">
                        <button>Review Order</button>
                    </Link>
                </Order>
            </div>
        </div >
    );
};

export default Shop;