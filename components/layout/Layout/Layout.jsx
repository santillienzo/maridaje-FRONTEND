import Head from "next/head";
import {Footer, NavBar, AppHeader} from "../../";
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
            <div className={style.app}>
                {
                    nav &&(
                        <header>
                            <NavBar
                                home={home}
                                cart={cart}
                            />
                            <AppHeader/>
                        </header>
                    )
                }

                <main className={style.main}>
                    {children}
                </main>

                {
                    footer && (
                        <Footer/>
                    )
                }
            </div>
        </>
    );
};

export default Layout;

