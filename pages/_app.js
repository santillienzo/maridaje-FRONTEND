import '../styles/globals.css'
import 'animate.css';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
  // import Swiper styles
  import 'swiper/css/bundle';
import { CartContextProvider } from '../context/CartContext';
import { Toaster } from 'react-hot-toast';

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
    <CartContextProvider>
      <ThemeProvider theme={theme}>
          <Toaster/>
          <Component {...pageProps} />
      </ThemeProvider>
    </CartContextProvider>
  )
}

export default MyApp
