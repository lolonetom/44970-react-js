import { Grid } from '@mui/material';
import React from 'react';
import Item from './Item';

export default function ItemList({ products }) {
  return (
    <>
    <Grid container justifyContent='center' alignItems='center'>
      {products.map((product) => (
          <Item product={product} />
      ))}
    </Grid>
    </>
  );
}
