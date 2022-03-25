import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import { addToDb, getStoredCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( () =>{
        fetch('products.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(()=>{
        const storedCart = getStoredCart();
        //console.log(storedCart)
        for(const id in storedCart){
            const addedPordeuct = products.find(product=> product.id === id);
            console.log(addedPordeuct)
        }
    },[]);
    const handleAddToCart = (product) =>{
        //console.log(product);
        // do not do this: cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
        //deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product 
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
                
            </div>
        </div>
    );
};

export default Shop;