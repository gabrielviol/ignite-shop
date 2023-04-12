import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";

import Image from 'next/future/image'
import { wrapper } from "../store";
import { Cart } from "../components/Cart";
import { ButtonCart } from "../components/ButtonCart";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <ButtonCart/>
        </Header>
                     
        <Component {...pageProps} />        
    </Container>
  )
}

export default wrapper.withRedux(App);


