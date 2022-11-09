import { Button, ButtonGroup, TextField } from '@mui/material';
import React, { useState } from 'react';



export default function ItemCount({stock}) {

    const[contar, setCont,] = useState(0);
    const decrecer =() =>{
        setCont(contar - 1);
    }

    const incrementar =() =>{
        setCont(contar + 1);
    }
return (
    <>
    <div>
        <ButtonGroup variant="contained" arial-label="outlined primary buttom group">
            <Button disabled={contar <= 0} onClick={decrecer}> - </Button>
            <TextField id="outlined-number" label="Cantidad" value={contar} variant="outlined"></TextField>
            <Button disabled={contar >= stock} onClick={incrementar}> + </Button>
        </ButtonGroup>
        <Button>Agregar al carrito</Button>
    </div>
    </>
)
}
