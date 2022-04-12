import React from 'react';
import useCart from '../../hokes/useCart';
import useProducts from '../../hokes/useProduct';
import ReviewItem from '../reviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import './Order.css'

const Orders = () => {
    const [products, setProducts] =useProducts();
    const [cart, setCart]=useCart(products);
//    const [removeItem, setremoveItem]= useCart
const handelRemoveItem=(item)=>{
const restproduct= cart.filter(product=>product.id !== item);
setCart(restproduct);
removeFromDb(item)

}
    //console.log(products)
    return (
        <div className='shop-container'>
            <div className="review_products-container">
                {
                    cart.map(product=><ReviewItem key={product.id} product={product}  handel={handelRemoveItem}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to={'/shipment'}> <button>go to shipment</button> </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;