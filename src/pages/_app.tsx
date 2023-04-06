import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"

import logoImg from '../assets/logo.svg'
import { Container, Header } from "../styles/pages/app";

import Image from 'next/future/image'
import { Handbag } from "phosphor-react";
import { Provider } from "react-redux";
import store from "../ReducerCart/store";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
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
    </Provider>
  )

}

