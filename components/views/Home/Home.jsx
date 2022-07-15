import { Box } from '@mui/system';
import React, { useState } from 'react'
import styles from './Home.module.css'
import {
    Link as LinkScroll
} from 'react-scroll'
import {Live} from '../../';

const Home = () => {
    const [helpOpacity, setHelpOpacity] = useState(0)    

    return (
        <section className={styles.home_section}>
            <div className={styles.presentation_wrapper} id="home">
                <div className={styles.text_side}>
                    <div>
                        <h3>Live Streaming & eCommerce</h3>
                        <p>Viví la única experiencia <span>Live Streaming Shopping</span> de bebidas, conoce a sus creadores y encontrá precios únicos</p>
                    </div>
                    <div>
                        <LinkScroll className={styles.action_btn} to="live" spy={true} offset={-40} onClick={()=> setHelpOpacity(1)}><i className="fas fa-video"></i> Ver en vivo</LinkScroll>
                        <LinkScroll className={styles.action_btn} to="commerce" spy={true}><span><i className="fas fa-shopping-bag"></i> Comprar</span></LinkScroll>
                    </div>
                </div>
                <div className={styles.live_side}>
                    <Live
                        helpOpacity={helpOpacity}
                    />
                </div>
            </div>
        </section>
    );
}

export default Home