import React, { useContext } from 'react'
import styles from './NavDesktop.module.css'
import Link from 'next/link'
import Router from "next/router";
import Image from 'next/image'
import AppBar from '@mui/material/AppBar';

// import {isAuthenticate} from '../../../../lib/auth'

//Contexto del carrito
// import { useState, useContext } from 'react';
// import CartContext from '../../../../context/CartContext';

const isAuthenticate = ()=> false

import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faShoppingBag, faShoppingCart, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
import { Badge, Box, Toolbar } from '@mui/material';
import CartContext from '../../../../context/CartContext';

const NavDesktop = ({logo, setOpenCart}) => {
    const {pathname} = useRouter()

    const {countCart} = useContext(CartContext)


    return (
        <AppBar position="fixed" color='backgroundOpacity'>
            <Toolbar>
                <Box sx={{ 
                        flexGrow: 1, 
                        width: '100%',
                        height: '50px',
                        display: 'flex', 
                        alignItems: 'center',
                        position: 'relative',
                    }} onClick={()=> Router.push('/')}>
                    <Image
                        src={logo}
                        className={styles.navDesktop_logo}
                        alt={"logo de maridaje club"}
                        layout='fill'
                        priority
                        objectFit="contain"
                    />
                </Box>
                <nav className={styles.navDesktop_nav}>
                    <ul>
                        <Link href={'/'}>
                            <a className={`${styles.navDesktop_nav_li} ${pathname === "/" &&(styles.activeClass)}`} title='Home'>
                                <FontAwesomeIcon icon={faHouse} />
                            </a>
                        </Link>
                        <Link href={'/shopping '}>
                            <a className={`${styles.navDesktop_nav_li} ${pathname.includes("/shopping") &&(styles.activeClass)}`} title='Comprar'>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </a>
                        </Link>
                        {

                            isAuthenticate() ? (
                                <>
                                    <Link href={'/profile/home'}>
                                        <a className={`${styles.navDesktop_nav_li} ${pathname.includes("/profile") &&(styles.activeClass)}`} title='Perfil'>
                                        <FontAwesomeIcon icon={faUser} />
                                        </a>
                                    </Link>
                                </>
                            ):(
                                <Link href={'/session'}>
                                    <a className={`${styles.navDesktop_nav_li} ${pathname === "/session" &&(styles.activeClass)}`} title='Iniciar sesión'>
                                    <FontAwesomeIcon icon={faSignIn} />
                                    </a>
                                </Link>
                            )
                        }
                        <div onClick={()=> setOpenCart(true)}>
                            <div className={`${styles.navDesktop_nav_li} ${pathname === "/cart" &&(styles.activeClass)}`} title='Carrito'>
                                <Badge badgeContent={countCart} color="secondary">
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </Badge>
                            </div>
                        </div>
                    </ul>
                </nav>
            </Toolbar>
        </AppBar>
    )
}

export default NavDesktop