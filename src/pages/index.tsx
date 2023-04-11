import { GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image"
import Link from 'next/link'

import { useKeenSlider } from 'keen-slider/react'

import { stripe } from "../lib/stripe";
import { HomeContainer, Product } from "../styles/pages/home"

import 'keen-slider/keen-slider.min.css';
import Stripe from "stripe";
import { Handbag } from "phosphor-react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import reducer, { selectProductsState, setProducts } from "../store/products";
import { wrapper } from "../store";

export interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[]
}

export default function Home(/*{ products }: HomeProps*/) {
  
  // const dispatch = useDispatch()
  
  // useEffect(() => {
  //   dispatch(setProducts(products))
  // }, [dispatch, products])

  const products = useSelector(selectProductsState)
  const dispatch = useDispatch()
  console.log(products)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map(product => {
          return (
            <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
              <Product
                className="keen-slider__slide"
              >
                <Image src={product.imageUrl} width={520} height={480} alt="" />

                <footer>
                  <div>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </div>
                  <Handbag size={18} weight="bold"/>
                </footer>
              </Product>
            </Link>
          )
        })}

      </HomeContainer>
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps( (store) => async ({params}) => {
  const response = await stripe.products.list({
      expand: ['data.default_price']
    })
  
    const products = response.data.map(product => {
      const price = product.default_price as Stripe.Price    
      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
      }
    })

    store.dispatch(setProducts(products))
    console.log("State on server", store.getState());
  
    return {
      props: {
          products,
      },
      revalidate: 60 * 60 * 2, //2h
    }
})