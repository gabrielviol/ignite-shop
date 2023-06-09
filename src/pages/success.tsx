import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
    customerName: string;
    products: [{
        quantaty: number,
        imageUrl: string,
        key: string
    }]
}

export default function Success({ customerName, products }: SuccessProps) {
    const totalQuantity = products.reduce((accumulator, item) => accumulator + item.quantaty, 0);
    return (
        <>
            <Head>
                <title>Compra efetuada | Ignite Shop</title>

                <meta name="robots" content="noindex" />
            </Head>
            <SuccessContainer>
                <h1>Compra efetuada!</h1>

                <div>
                    {products.map(item => {
                        return (
                            <ImageContainer key={item.key}>
                                <Image src={item.imageUrl} width={120} height={110} alt="" />
                            </ImageContainer>
                        )
                    })}
                </div>

                <p>
                    Uhuul <strong>{customerName}</strong>, sua compra de <strong>{totalQuantity}</strong> camisa(s) já está a caminho da sua casa.
                </p>

                <Link href={'/'}>
                    Voltar ao catálogo
                </Link>
            </SuccessContainer>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    if (!query.session_id) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }

    const sessionId = String(query.session_id);

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details.name;
    // const products = session.line_items.data[0].price.product as Stripe.Product;
    const products = session.line_items.data.map(item => {
        const product = item.price.product as Stripe.Product;
        return {
            imageUrl: product.images?.[0] ?? '',
            quantaty: item.quantity,
            key: item.id
        }
    })

    return {
        props: {
            customerName,
            // product: {
            //     name: products.name,
            //     imageUrl: products.images[0],
            // }
            products
        }
    }
}