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
        const savedCart = [];

        for(const id in storedCart){
            const addedPordeuct = products.find(product=> product.id === id);
            if(addedPordeuct){
                const quantity = storedCart[id];
                addedPordeuct.quantity=quantity;
                savedCart.push(addedPordeuct);

            }
            setCart(savedCart);
            console.log(addedPordeuct)
        }
    },[products]);
    const handleAddToCart = (selectedProduct) =>{
        //console.log(product);
        // do not do this: cart.push(product);
        let newCart = [];
        const exists = cart.find(product=>product.id === selectedProduct.id);
        if(!exists){
            selectedProduct.quantity = 1;
            newCart= [...cart, selectedProduct];
        }else{
            const rest= cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity +1;
            newCart = [...rest,exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
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