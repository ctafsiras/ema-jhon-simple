import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {handleRemove, product}=props
    const {name, img, price, shipping, quantity}=product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />

            </div>
            <div className='item-detail-container'>
                <div className="item-details">
                    <p title={name}>{name.length > 20? name.slice(0, 20)+'...': name}</p>
                    <p>Price: ${price}</p>
                    <p>Shipping: ${shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className="item-delete">
                    <button onClick={()=>handleRemove(product)}><FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>

            </div>
        </div>
    );
};

export default ReviewItem;