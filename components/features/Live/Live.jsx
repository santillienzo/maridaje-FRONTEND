import styles from './Live.module.css'
import { lazy, Suspense, useEffect } from 'react';
import {useState} from 'react'
import ReactPlayer from 'react-player';

import {formatDate, formatHour} from '../../../lib/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { Box } from '@mui/material';

const Live = ({helpOpacity}) => {    

    return (
        <div className={styles.live_box}>
            <div className={styles.live_wrapper}>
                <div className={styles.video_container}>
                    <video
                        className={styles.react_player}
                        src={'/video.mp4'}
                        playing="true"
                        loop
                        muted
                        autoPlay
                        width={'100%'}
                        height={'100%'}
                    />
                    <div className={styles.live_info_container}>
                        <h4>Presentacion bodega los haroldos</h4>
                        <div className={styles.date_container}>
                            <Box sx={{mb:1}}><FontAwesomeIcon icon={faCalendarAlt}/> <p>{`${formatDate('2022-06-16T19:52:51.066+00:00')}`}</p></Box>
                            <Box><FontAwesomeIcon icon={faClock}/><p>{`${formatHour('2022-06-16T19:52:51.066+00:00')}`}</p></Box>
                        </div>
                    </div>
                    <span className={styles.help_cover} styles={{opacity: helpOpacity}}>Haz click en el título para ingresar al evento</span>
                    <span className={styles.live_alert} title='En vivo'>En vivo</span>
                    <span className={styles.more_info} title='Más Info' onClick={()=> setModalActivate({activate: true, event, isNext: false})}><i className="fas fa-exclamation-circle"></i></span>
                </div>
            </div>
        </div>
    );
};

export default Live;