import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import {AppHeader} from '../../';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faClose, faDeleteLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Avatar, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Tooltip, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CartDrawer = ({openCart, setOpenCart}) => {

    //Estos datos vendran desde el context
    const product ={
        id: '54',
        name: 'Vino',
        price: '1548',
        quantity: 5
    }
    const countCart = 10
    const priceTotal = 1548
    //Estos datos vendran desde el context

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
    
        setOpenCart(open);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: 350 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <Box sx={{mb:2}}>
                <Paper sx={{
                    width: '95%',
                    m: 'auto',
                    mt: 1,
                    p:1,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/1407846/pexels-photo-1407846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Box sx={{display:'flex', flexDirection:'column', flex:1, ml:2}}>
                        <Typography variant='h6'>{product.name}</Typography>
                        <Typography>${product.price}</Typography>
                    </Box>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Cantidad</InputLabel>
                        <Select
                            labelId="demo-select-small"
                            id="demo-select-small"
                            value={product.quantity.toString()}
                            label="Cantidad"
                            onChange={(e)=> updateItem(Number(e.target.value), product)}
                        >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                        </Select>
                    </FormControl>
                    <IconButton
                        onClick={()=> deleteItemToCart(product.id)}
                        size="large"
                        edge="end"
                        aria-label="account of current user"
                        aria-haspopup="true"
                    >
                        <Tooltip title='Eliminar de carrito'>
                            <FontAwesomeIcon icon={faTrash} style={{fontSize: '20px'}}/>
                        </Tooltip>
                    </IconButton>
                </Paper>
            </Box>
            <Divider/>
            <Box padding={2}>
                <Typography variant="h5">Resumen del pedido</Typography>
                <Box marginTop={1}>
                    <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                        <Typography>{countCart} productos</Typography>
                        <Typography>${priceTotal}</Typography>
                    </Box>
                    <Box sx={{display:'flex', justifyContent: 'space-between'}}>
                        <Typography variant="h6">Subtotal</Typography>
                        <Typography variant="h6">${priceTotal}</Typography>
                    </Box>
                    <Button variant="contained" endIcon={<FontAwesomeIcon icon={faChevronRight} style={{fontSize: '16px'}}/>} sx={{width: '100%'}}>
                        Ir a pagar
                    </Button>
                </Box>
            </Box>
        </Box>
    );

    return (
        <Drawer
            anchor={'right'}
            open={openCart}
            onClose={toggleDrawer(false)}
        >
            <AppHeader
                sx={{justifyContent:'left', ml: 2}}
            >
                <FontAwesomeIcon icon={faChevronRight} onClick={toggleDrawer(false)} style={{cursor: 'pointer'}}/>
            </AppHeader>
            <Divider/>
            {list('right')}
        </Drawer>
    )
}

export default CartDrawer