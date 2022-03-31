import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping =0;
    let quantity = 0;
    for (const product of cart) {
        total = total+ product.price * product.quantity;
        shipping= shipping+ product.shipping;
        quantity = quantity + product.quantity;

    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + tax;
    return (
        <div className='cart'>
                <h4>Order Summary</h4>
                <p>Selected Items: {quantity}</p>
                <p>Total Price: { total}</p>
                <p>Total Shipping: {shipping}</p>
                <p>Tax: {tax}</p>
                <br />
                <p><b>Grande Total: {grandTotal}</b></p>
        </div>
    );
};

export default Cart;