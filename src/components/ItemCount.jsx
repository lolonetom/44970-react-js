import { Button, ButtonGroup, TextField } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import { cartContext } from '../CartContextComponent';



export default function ItemCount({ item, product }) {

    const[contar, setCont,] = useState(1);
    const {cart, addToCart} = useContext(cartContext);
    const decrecer =() =>{
        setCont(contar - 1);
    }

    const incrementar =() =>{
        setCont(contar + 1);
    }

    function onAdd (){
        /* setCart([...cart, {...product, contar }]) */
        addToCart(product, contar);
    };

useEffect(() =>{
    console.log(cart)
}, [cart]);

return (
    <>
        <ButtonGroup variant='contained' arial-label='outlined primary buttom group'>
            <Button disabled={contar <= 0} onClick={decrecer}> - </Button>
            <TextField id='outlined-disabled' label='Cantidad' value={contar} variant='outlined' sx={{width:'80px'}}></TextField>
            <Button disabled={contar >= product.stock} onClick={incrementar}> + </Button>
        </ButtonGroup>
        <Button onClick={onAdd} style={{margin:'15px'}} disabled={contar <= 0 } variant='outlined'>Agregar al carrito</Button>
    </>
)
}
