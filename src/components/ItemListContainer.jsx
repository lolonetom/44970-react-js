import { Box, Grid } from '@mui/material';
import React from 'react';
import ItemCount from './ItemCount';

export default function ItemListContainer() {
    return (
        <>
        <Grid>
        <div style={{display: "flex", justifyContent: "center",alignItems: "center",margin: "10px"}}>
            <ItemCount stock={10}/>
        </div>
        </Grid>
        </>
    )
}
