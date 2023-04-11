import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";

import Image from 'next/future/image'
import { Handbag } from "phosphor-react";
import { wrapper } from "../store";

globalStyles();

function App({ Component, pageProps }: AppProps) {
  return (
      <Container>
        <Header>
          <Image src={logoImg} alt="" />
          <div>
            <Handbag size={18} weight="bold" />
            <div>1</div>
          </div>
        </Header>
        <Component {...pageProps} />        
      </Container>
  )
}

export default wrapper.withRedux(App);


