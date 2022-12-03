import { Box, Button, Typography } from '@mui/material';
import React, { useContext, useState } from 'react'
import { cartContext } from '../CartContextComponent';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { Link } from 'react-router-dom';


export default function Checkout() {
    const { totalPrice, cart ,deleteAllFromCart } = useContext(cartContext)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [orderId, setOrderId] = useState("");

    function validateForm () {
        const order = {
            buyer: { name, tel, email },
            totalPrice,
            cart,
        };

    const db = getFirestore();
    const orders = collection(db, "orders");
    addDoc(orders, order).then(({ id }) => { 
        setOrderId (id);
        deleteAllFromCart();
    });
}
if (cart.length === "0"){
    return (
    <>
    <Link to={"/"}>Seguir comprando
    </Link></>
    )
}
    return (
        <>
            {orderId ? (
                "Gracias por confiar en nosotros. Tu id de compra es: " + orderId 
            ) : (
                <Box>
                    <Typography>Pasa seguir con tu compra, ingresa estos datos:</Typography>
                    <input type="text" placeholder='Nombre' onChange={(e) => setName(e.target.value)} /><br />
                    <input type="tel" placeholder='Telefono' onChange={(e) => setTel(e.target.value)} /><br />
                    <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} /><br />
                <Button onClick={validateForm}>Finalizar Compra</Button>
                </Box>
            )}

        </>
    )
}
