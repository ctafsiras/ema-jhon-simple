import React from 'react';
import './Summery.css'

const Summery = ({cart, children}) => {
    let quantity=0;
    let price=0;
    let shipping=0;
    for (const key of cart) {
        quantity=key.quantity+quantity;
        price=price+((+key.price)*key.quantity)
        shipping=shipping+(+key.shipping)
        }
    const tax=((price+shipping)/10).toFixed(2);
    return (
        <div className='cart'>
             <h3>Order Summery</h3>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: ${price}</p>
                <p>Total Shipping Price: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h4>Grand Total: ${+tax+price+shipping}</h4>
                {children}
        </div>
    );
};

export default Summery;