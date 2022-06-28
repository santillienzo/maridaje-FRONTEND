import React from 'react'
import styles from './NavMobile.module.css'
import Link from 'next/link'
import Router, { useRouter } from "next/router";
import Image from 'next/image'

// import { isAuthenticate } from '../../../../lib/auth';

//Contexto de carrito
import { useContext, useState } from 'react';
import { Badge } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
// import CartContext from '../../../../context/CartContext';

const isAuthenticate = ()=> false

const NavMobile = ({logo}) => {
    const {pathname} = useRouter()

    const [openMenu, setOpenMenu] = useState(false);

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

    return (
        <div className={styles.navMobile_container}>
            <div className={styles.navMobile_bar} style={openMenu ? ({backgroundColor:"var(--global-background-color)"}):({})}>
                <div className={styles.navMobile_logo_container} onClick={()=> Router.push('/')}>
                    <Image
                        src={logo}
                        className={styles.navMobile_logo}
                        alt={"logo de maridaje club"}
                        layout='fill'
                        priority
                    />
                </div>
                <div className={styles.navMobile_bar_content}>
                    <div className={styles.cart_icon}>
                        <Badge badgeContent={4} color="error">
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </Badge>
                    </div>
                    <div className={`${styles.navMobile_menu} `} onClick={()=> displayMenu()} id="navMobile_menu">
                        <span></span>
                    </div>
                </div>
            </div>
            {
                openMenu ? 
                (
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
                ):("")
            }
        </div>
    );
}

export default NavMobile