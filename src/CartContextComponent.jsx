import React, { createContext, useState, useEffect } from 'react'


export const cartContext = createContext();

export default function CartContextComponent({ children }) {
    const [cart, setCart] = useState ([]);
    const [totalCount, setTotalCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    function addToCart(item, contar){
        const cartAux =[...cart];

        let foundInCart = false;
        
        for(let i = 0; i < cartAux.length; i++){
            if(cartAux[i].id === item.id ){
                cartAux[i].contar = cartAux[i].contar + contar;
                // eslint-disable-next-line no-unused-vars
                foundInCart = true;
            }
        }
        if(!foundInCart){
            cartAux.push({...item, contar});
        }

        setCart(cartAux);
    }

    function deleteFromCart(id){
        setCart(cart.filter(item => item.id !== id))
    }
    function deleteAllFromCart(){
        setCart([]);
    }

    useEffect(() => {
        setTotalCount(cart.reduce((acc, item) => acc + item.contar, 0));
        setTotalPrice(cart.reduce((acc, item) => acc + item.contar * item.price, 0));
    }, [cart]);

    return (
        <cartContext.Provider value={{ cart, addToCart, totalCount, totalPrice, deleteFromCart, deleteAllFromCart}}>
            {children}
        </cartContext.Provider>
    );
}
