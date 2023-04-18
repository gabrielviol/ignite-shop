import { useDispatch, useSelector } from "react-redux";
import { Container, Content, Finalize, Item, RemoveAddItem, slideOut } from "../styles/pages/Cart";
import { Minus, Plus, X } from "phosphor-react";
import { SelectCartState, addOneItem, amountTotal, decrementItem, removeItem } from "../store/cart";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import { css } from "@stitches/react";
import { slideIn } from '../styles/pages/Cart'
import Link from "next/link";
import Image from "next/image";

export function Cart({ close }) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const cart = useSelector(SelectCartState)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(amountTotal(cart))
        console.log(amountTotal)
    }, [cart, dispatch])

    function handleRemoveItem(item) {
        dispatch(removeItem(item))
        toast.success('Item removido do carrinho', {
            position: 'bottom-left'
        })
    }

    function handleDecrementItem(item) {
        dispatch(decrementItem(item))
    }

    function handleIncrementItem(item) {
        dispatch(addOneItem(item))
    }

    async function handleBuyProduct() {

        const lineItems = cart.items
        try {
            setIsCreatingCheckoutSession(true);

            const response = await axios.post('/api/checkout', {
                items: lineItems.map((item) => ({
                    price: item.defaultPriceId,
                    quantity: item.quantatyItem,
                }))
            }
            )
            const { checkoutUrl } = response.data;

            window.location.href = checkoutUrl
        } catch (err) {
            //conectar com uma ferramenta de observabilidade (Datadog/ Sentry)

            setIsCreatingCheckoutSession(false);

            alert('Falha ao redirecionar ao checkout!')
        }
    }
    const cartOpen = css({
        animation: `${slideIn} 0.3s ease-out`
      });
      const cartClose = css({
        animation: `${slideOut} 0.3s ease-in` 
      });

    return (
        <Container className={close ? cartOpen() : cartClose()}>
            <Content>
                <div className="fechar">
                    <h1>Sacola de compras</h1>
                    <X size={32} weight="bold" onClick={close}/>
                </div>
                {cart.items.length === 0 ? (
                    <Item>
                        <span>Carrinho vazio</span>
                    </Item>
                ) :
                    cart.items.map(item => {
                        const valueItems = ((parseFloat(item.price.replace(/[^\d,]/g, '').
                            replace(',', '.'))) * item.quantatyItem).
                            toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        return (
                            <div key={item.id}>
                                <Item >
                                    <Image className="image" src={item.imageUrl} alt={item.name} width={96} height={96} />
                                    <div>
                                        <span>{item.name}</span>
                                        <p>{valueItems}</p>
                                        <RemoveAddItem>
                                            <span>
                                                <Minus size={12} onClick={() => handleDecrementItem(item)} />
                                                {item.quantatyItem}
                                                <Plus size={12} onClick={() => handleIncrementItem(item)} />
                                            </span>
                                            <button onClick={() => handleRemoveItem(item)}>Remover</button>
                                        </RemoveAddItem>

                                    </div>
                                </Item>
                            </div>
                        )
                    })
                }
            </Content>
            <Finalize>
                <div>
                    <p>Quantidade</p>
                    <p>{cart.totalQuantatyItem}</p>
                </div>
                <div>
                    <span>Valor total</span>
                    <span>{ cart.amountItems }</span>
                </div>
                <button onClick={handleBuyProduct} disabled={isCreatingCheckoutSession}>Finalizar compra</button>
                <Link className="Link" href={"/"} onClick={close}>Continuar Comprando</Link>
            </Finalize>

        </Container>
    )
}