import React, { useContext } from "react";
import { cartContext } from '../CartContextComponent';

export default function Carro() {
    const { cart, totalCount, totalPrice, deleteFromCart } = useContext(cartContext);
    return (
        <>
            {cart.map(item =>
                <div key={item.id}>
                    {item.name + "" + item.contar}{""}
                    <span onClick={() => deleteFromCart(item.id)}> - </span>
                </div>

            )}
            <div>Tienes en el carro: {totalCount} a pagar: {totalPrice}</div>
        </>
    )
}
