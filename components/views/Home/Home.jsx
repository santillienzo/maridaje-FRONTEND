import { Box } from '@mui/system';
import React from 'react'
import styles from './Home.module.css'
import {
    Link as LinkScroll
} from 'react-scroll'

const Home = () => {
    return (
        <section className={styles.home_section}>
            <div className={styles.color}></div>
            <div className={styles.color}></div>
            <div className={styles.live_container}>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}> {/*MOBILE*/}
                    <div className={styles.presentation_container} id="home">
                        <div className={styles.about_text_container}>
                            <div className={styles.about_text_container_text}>
                                <h3>Live Streaming & eCommerce</h3>
                                <p>Viví la única experiencia <span>Live Streaming Shopping</span> de bebidas, conoce a sus creadores y encontrá precios únicos</p>
                            </div>
                            <div>
                                <LinkScroll className={styles.about_btn} to="live" spy={true} offset={-40} onClick={()=> setHelpOpacity(1)}><i className="fas fa-video"></i> Ver en vivo</LinkScroll>
                                <LinkScroll className={styles.about_btn} to="commerce" spy={true}><span><i className="fas fa-shopping-bag"></i> Comprar</span></LinkScroll>
                            </div>
                        </div>
                        {/* <Live
                            setEnterEvent={setEnterEvent}
                            helpOpacity={helpOpacity}
                            homeEvent={homeEvent}
                        /> */}
                    </div>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}> {/*MOBILE*/}

                </Box>
            </div>
        </section>
    );
}

export default Home