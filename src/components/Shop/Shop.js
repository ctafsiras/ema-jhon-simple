import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCarts } from '../../utilities/fakedb';
import Product from '../Product/Product';
import Summery from '../Summery/Summery';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useProducts()
    useEffect(() => {
        const storedCart = getStoredCarts();
        const savedCart = []
        for (const key in storedCart) {
            const addedItem = products.find(item => item.id === key)
            if (addedItem) {
                const qnt = storedCart[key]
                addedItem.quantity = qnt;
                savedCart.push(addedItem)
            }
        }
        setCart(savedCart)
    }, [products])

    const [cart, setCart] = useState([])
    const hanleAddToCart = (product) => {

        setCart([...cart, product])
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} hanleAddToCart={hanleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Summery cart={cart}>
                   <Link to='/orders'> <button>Review Order</button></Link>
                </Summery>
            </div>
        </div>
    );
};

export default Shop;