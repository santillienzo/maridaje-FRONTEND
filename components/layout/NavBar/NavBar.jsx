import { Box } from '@mui/material'
import React, { useState } from 'react'
import {NavDesktop, NavMobile, CartDrawer} from '../../'

const logo= '/brand/black_brand.png'


const NavBar = () => {
    const [openCart, setOpenCart] = useState(false);


    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <NavDesktop
                    logo={logo}
                    setOpenCart={setOpenCart}
                />
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <NavMobile
                    logo={logo}
                    setOpenCart={setOpenCart}
                />
            </Box>
            <CartDrawer openCart={openCart} setOpenCart={setOpenCart}/>
        </>
    )
}

export default NavBar