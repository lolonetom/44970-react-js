import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../CartContextComponent';

export default function CartWidget() {
    const { totalCount } =useContext(cartContext);
    return (
    <>
    <div className ="icon-cart">
    <ShoppingCartIcon /> {  totalCount  }
    </div>
    </>
    )
}
