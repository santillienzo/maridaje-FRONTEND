import React, { useContext, useState } from 'react'
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import {AppHeader, ProductCartList} from '../../';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight} from '@fortawesome/free-solid-svg-icons';
import { Typography, Box } from '@mui/material';
import CartContext from '../../../context/CartContext';


const CartDrawer = ({openCart, setOpenCart}) => {

    const {countCart} = useContext(CartContext)


    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setOpenCart(open);
    };

    return (
        <Drawer
            anchor={'right'}
            open={openCart}
            onClose={toggleDrawer(false)}
        >
            <Box sx={{ minWidth: 400 }}>
                <AppHeader
                    sx={{justifyContent:'left', ml: 2}}
                >
                    <FontAwesomeIcon icon={faChevronRight} onClick={toggleDrawer(false)} style={{cursor: 'pointer'}}/>
                </AppHeader>
                <Divider/>
                {
                    countCart > 0 ?(
                        <ProductCartList toggleDrawer={toggleDrawer}/>
                    ):(
                        <Typography sx={{padding: 2, textAlign: 'center'}} variant='h6'>El carrito está vacío</Typography>
                    )
                }
            </Box>
        </Drawer>
    )
}

export default CartDrawer