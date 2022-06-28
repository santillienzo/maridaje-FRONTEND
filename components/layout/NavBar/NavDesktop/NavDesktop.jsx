import React from 'react'
import styles from './NavDesktop.module.css'
import Link from 'next/link'
import Router from "next/router";
import Image from 'next/image'

// import {isAuthenticate} from '../../../../lib/auth'

//Contexto del carrito
// import { useState, useContext } from 'react';
// import CartContext from '../../../../context/CartContext';

const isAuthenticate = ()=> false

import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faShoppingBag, faShoppingCart, faSignIn, faUser } from '@fortawesome/free-solid-svg-icons';
import { Badge } from '@mui/material';

const NavDesktop = ({logo}) => {
    const {pathname} = useRouter()

    return (
        <div className={styles.navDesktop_container}>
            <div className={styles.navDesktop_logo_container} onClick={()=> Router.push('/')}>
                <Image
                    src={logo}
                    className={styles.navDesktop_logo}
                    alt={"logo de maridaje club"}
                    layout='fill'
                    priority
                    objectFit="contain"
                />
            </div>
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
                    <div onClick={()=> displayCart()}>
                        <div className={`${styles.navDesktop_nav_li} ${pathname === "/cart" &&(styles.activeClass)}`} title='Carrito'>
                            <Badge badgeContent={4} color="error">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </Badge>
                        </div>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default NavDesktop