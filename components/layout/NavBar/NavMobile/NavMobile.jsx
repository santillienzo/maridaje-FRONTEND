import React from 'react'
import styles from './NavMobile.module.css'
import Link from 'next/link'
import Router, { useRouter } from "next/router";
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import {AppHeader} from '../../../'


// import { isAuthenticate } from '../../../../lib/auth';

//Contexto de carrito
import { useContext, useState } from 'react';
import { AppBar, Badge, Toolbar, Tooltip, Box } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import CartContext from '../../../../context/CartContext';
import { useEffect } from 'react';
// import CartContext from '../../../../context/CartContext';

const isAuthenticate = ()=> false

const NavMobile = ({logo, setOpenCart}) => {
    const [mounted, setMounted] = useState(false)

    const {pathname} = useRouter()

    const [openMenu, setOpenMenu] = useState(false);
    const {countCart} = useContext(CartContext)

    useEffect(()=>{
        setMounted(true)
    },[mounted])


    const displayMenu = ()=>{
        const navMobile = document.getElementById('navMobile_nav')
        const navMobile_menu = document.getElementById('navMobile_menu')

        if (openMenu) {
            navMobile.classList.replace("animate__slideInDown", "animate__slideOutUp")
            navMobile_menu.classList.remove(`${styles.menuActive}`)
            setTimeout(()=>{
                navMobile.classList.replace("animate__slideOutUp", "animate__slideInDown")
                setOpenMenu(false)
            },500)
            
        }else{
            navMobile_menu.classList.add(`${styles.menuActive}`)
            setOpenMenu(true)
        }

    }

    return mounted &&(
        <div className={styles.navMobile_container}>
            <AppBar position="fixed" color={openMenu ? ('background'):('backgroundOpacity')}>
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
                            className={styles.navMobile_logo}
                            alt={"logo de maridaje club"}
                            layout='fill'
                            priority
                        />
                    </Box>
                    <div className={styles.navMobile_bar_content}>
                        <div className={styles.cart_icon} onClick={()=> setOpenCart(true)}>
                            <Badge badgeContent={countCart} color="error">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </Badge>
                        </div>
                        <div className={`${styles.navMobile_menu} `} onClick={()=> setOpenMenu(true)} id="navMobile_menu">
                            <span></span>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            {
                openMenu ? 
                (
                    <>
                        <AppHeader/>
                        <nav className={ `${styles.navMobile_nav} animate__animated animate__slideInDown animate__faster`} id="navMobile_nav">
                            <ul>
                                <>
                                    <Link href={'/'} onClick={()=> displayMenu()}>
                                        <a className={`${styles.navMobile_nav_li} ${pathname === "/" &&(styles.activeClass)}`}>
                                            Inicio
                                        </a>
                                    </Link>
                                    <Link href={'/shopping'} onClick={()=> displayMenu()}>
                                        <a className={`${styles.navMobile_nav_li } ${pathname.includes("/shopping") &&(styles.activeClass)}`}>
                                            Comprar
                                        </a>
                                    </Link>
                                    {
                                        isAuthenticate() ? (
                                            <>
                                                <Link href={'/profile/home'} onClick={()=> displayMenu()}>
                                                    <a className={`${styles.navMobile_nav_li} ${pathname.includes("/profile") &&(styles.activeClass)}`}>
                                                        Perfil
                                                    </a>
                                                </Link>
                                            </>
                                        ):(
                                            <Link href={'/session'} onClick={()=> displayMenu()}>
                                                <a className={`${styles.navMobile_nav_li} ${pathname === "/session" &&(styles.activeClass)}`}>
                                                    Ingresar
                                                </a>
                                            </Link>
                                        )
                                    }
                                </>
                            </ul>
                        </nav>
                    </>
                ):("")
            }
        </div>
    );
}

export default NavMobile