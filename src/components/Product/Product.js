import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const { name, price, ratings, seller, img } = props.product;
    return (

        <div className='product'>
            <img src={img} alt="" />
            <div className="p-info">
                <p className='p-name'>{name}</p>
                <p className='p-price'>Price: {price}</p>
                <p className='p-seller'>Seller: {seller}</p>
                <p className='p-rating'>Ratings: {ratings}</p>
            </div>
            <button onClick={() => props.hanleAddToCart(props.product)} className='btn'>Add to Cart
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>

    );
};

export default Product;