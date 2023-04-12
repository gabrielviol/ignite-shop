import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg'
import { Container } from "../styles/pages/app";

import Image from 'next/future/image'
import { wrapper } from "../store";
import { Cart } from "../components/Cart";
import { ButtonCart } from "../components/ButtonCart";
import { Header } from "../components/Header";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
        <Header/>                     
        <Component {...pageProps} />        
    </Container>
  )
}

export default wrapper.withRedux(App);


