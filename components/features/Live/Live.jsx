import styles from './Live.module.css'

import {formatDate, formatHour} from '../../../lib/util'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { Box, Paper } from '@mui/material';

const Live = ({helpOpacity}) => {    

    return (
        <Paper elevation={10} className={styles.video_container}>
                <video
                    className={styles.react_player}
                    src={'/video1.mp4'}
                    playing="true"
                    loop
                    muted
                    autoPlay
                    width={'100%'}
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
        </Paper>
    );
};

export default Live;