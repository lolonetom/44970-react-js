import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../CartContextComponent';



export default function Item({ product }) {
  const {cart, addToCart} = useContext(cartContext);
  const[contar, setCont,] = useState(1);
  function onAdd (){
    /* setCart([...cart, {...product, contar }]) */
    addToCart(product,contar);
};
useEffect(() =>{
}, [cart]);

  return (
    //SE DEBE CREAR LOS CARDS CON MUI*/
    <>
      <Card sx={{ maxWidth: 350, maxHeight: 800, margin: 3, p: 4, border: '0.5px solid gray ', borderRaduis: 3,textAlign:'center' }}>
        <CardHeader
          title={product.name}
        />
        <CardMedia
          component='img'
          height='auto'
          image={product.img}
          alt={product.name}
        />
        <CardContent>
          <Typography variant='body1' color='text.secondary'>
            Precio: $ {product.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='Agregar a favoritos'>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
        <ButtonGroup style={{p:5, margin:3, width:350}} variant='contained' arial-label='outlined primary buttom group'>
          <Link to={'/item/' + product.id} style={{textDecoration: 'none'}} >
          <Button sx={{ border: '0px'}}> 
            Más Detalle
          </Button>
          </Link>
          <Typography style={{  textAlign:'center'  }} variant='body2' color='text.secondary'>Disponibles: {product.stock}</Typography>
        </ButtonGroup>
      </Card>
    </>
  );
}
