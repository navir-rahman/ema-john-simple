import React from 'react';
import './Cart.css'
const Cart = () => {
    return (
        <div>
                <h4>Order Summary</h4>
                <p>Selected Items: {Cart.length}</p>
        </div>
    );
};

export default Cart;