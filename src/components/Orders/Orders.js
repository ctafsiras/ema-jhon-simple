import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import ReviewItem from '../ReviewItem/ReviewItem';
import Summery from '../Summery/Summery';
import './Order.css'
const Orders = () => {
    const [products, setProducts]=useProducts()
    const [cart, setCart]=useCart(products)
    const handleRemove=(product)=>{
        const rest=cart.filter(pd=>pd.id !== product.id)
        setCart(rest)
        removeFromDb(product.id);
    }
    return (
        <div className='shop-container'>
             <div className="review-items-container">
                {
                    cart.map(product=><ReviewItem handleRemove={handleRemove} key={product.id} product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
             <Summery cart={cart}>
             <Link to='/inventory'> <button>Proceed Checkout</button></Link>
             </Summery>
            </div>
        </div>
    );
};

export default Orders;