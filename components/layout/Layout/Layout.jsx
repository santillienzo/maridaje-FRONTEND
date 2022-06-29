import Head from "next/head";
import {Footer, NavBar} from "../../";
import { styled } from '@mui/material/styles';
import style from './Layout.module.css'


const AppHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // background: 'red',
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));


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

