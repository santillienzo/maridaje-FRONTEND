import '../styles/globals.css'
import 'animate.css';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'light',
    background:{
      main: '#F7F7FF'
    },
    backgroundOpacity:{
      main: '#ffffff50'
    },
    primary: {
      main: '#F2C84B',
    },
    secondary: {
      main: '#F23F5E'
    }
  },
});


function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
