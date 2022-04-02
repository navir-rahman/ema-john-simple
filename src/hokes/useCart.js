import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb";

const useCart = (products)=>{
    const [cart,setCart]=useState([]);
    
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart= [];
        for (const id in storedCart) {
            const addedPordeuct = products.find(product=> product.id === id)
            if(addedPordeuct){
                const quantity = storedCart[id];
                addedPordeuct.quantity = quantity;
                savedCart.push(addedPordeuct);
            }
        }
        setCart(savedCart);
    }, [products]);

    return [cart, setCart]

}
export default useCart;