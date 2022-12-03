import FavoriteIcon from '@mui/icons-material/Favorite';
import { Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';



export default function Item({ product }) {

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
        <ButtonGroup style={{p:5, margin:3,}} variant='contained' arial-label='outlined primary buttom group'>
          <Link to={'/item/' + product.id} style={{textDecoration: 'none'}} >
          <Button> 
            Más Detalle
          </Button>
          </Link>
          <Button > Agregar al Carrito </Button>
        </ButtonGroup>
        <Typography variant='body2' color='text.secondary'>
        Unidades disponibles: {product.stock}
        </Typography>
      </Card>
    </>
  );
}
