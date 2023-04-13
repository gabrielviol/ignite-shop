import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import { Container } from "../styles/pages/app";

import { wrapper } from "../store";
import { Header } from "../components/Header";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>        
        <Header/>                     
        <Component {...pageProps} />  
        <ToastContainer />      
    </Container>
  )
}

export default wrapper.withRedux(App);


