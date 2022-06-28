import Head from "next/head";
import {Footer, NavBar} from "../../";
import style from './Layout.module.css'


const Layout = ({children, title, description, home, cart, nav=true ,footer=true}) => { 
    
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
                <meta 
                    name="desciption"
                    content={description}
                />
            </Head>
            {
                nav &&(
                    <header id="header" className={style.header}>
                        <NavBar
                            home={home}
                            cart={cart}
                        />
                    </header>
                )
            }

            <main className={style.main}>{children}</main>

            {
                footer && (
                    <Footer/>
                )
            }
        </>
    );
};

export default Layout;

