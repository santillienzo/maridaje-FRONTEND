import { Box } from '@mui/system';
import React, { useState } from 'react'
import styles from './Home.module.css'
import {
    Link as LinkScroll
} from 'react-scroll'
import {Live} from '../../';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faVideo } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [helpOpacity, setHelpOpacity] = useState(0)    

    return (
        <section className={styles.home_section}>
            <div className={styles.presentation_wrapper} id="home">
                <div className={styles.live_side}>
                    <Live
                        helpOpacity={helpOpacity}
                    />
                </div>
                <div className={styles.text_side}>
                    <div>
                        <div>
                            <h3>Comprá en VIVO</h3>
                            <p>Las mejores bebidas presentadas por sus creadores en el 1er <span>LiveStream Shopping</span>.</p>
                        </div>
                        <div>
                            <LinkScroll className={styles.action_btn} to="live" spy={true} offset={-40} onClick={()=> setHelpOpacity(1)}><span> <FontAwesomeIcon icon={faVideo}/> Ver en vivo</span></LinkScroll>
                            <LinkScroll className={styles.action_btn} to="commerce" spy={true}><span><FontAwesomeIcon icon={faShoppingBag}/> Comprar</span></LinkScroll>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home