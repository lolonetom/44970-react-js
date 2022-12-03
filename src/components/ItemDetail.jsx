import FavoriteIcon from '@mui/icons-material/Favorite';
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material';
import React from 'react';
import ItemCount from "./ItemCount";

export default function ItemDetail({ product }) {
  return (
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
        <Typography variant='body2' color='text.secondary'>
        Unidades disponibles: {product.stock}
        </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='Agregar a favoritos'>
            <FavoriteIcon />
          </IconButton>
        </CardActions>
        <ItemCount product={product} />
      </Card>
    </>
  )
}
