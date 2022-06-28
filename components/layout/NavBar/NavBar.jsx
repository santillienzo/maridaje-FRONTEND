import { Box } from '@mui/material'
import React from 'react'
import {NavDesktop, NavMobile} from '../../'

const logo= '/brand/black_brand.png'


const NavBar = () => {
    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <NavDesktop
                    logo={logo}
                />
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <NavMobile
                    logo={logo}
                />
            </Box>
        </>
    )
}

export default NavBar