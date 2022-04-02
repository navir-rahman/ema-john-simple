import React from 'react';
import useCart from '../../hokes/useCart';
import useProducts from '../../hokes/useProduct';
import ReviewItem from '../reviewItem/ReviewItem';
import Cart from '../Cart/Cart';

const Orders = () => {
    const [products, setProducts] =useProducts();
    const [cart, setCart]=useCart(products)
    console.log(products)
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    cart.map(product=><ReviewItem key={product.id} product={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;