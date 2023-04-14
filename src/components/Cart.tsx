import { useDispatch, useSelector } from "react-redux";
import { Container, Content, Finalize, Item, RemoveAddItem } from "../styles/pages/Cart";
import { Minus, Plus, X } from "phosphor-react";
import { SelectCartState, addOneItem, decrementItem, removeItem,  } from "../store/cart";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

export function Cart({ close }) {
    const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

    const cart = useSelector(SelectCartState)
    const dispatch = useDispatch()

    function handleRemoveItem(item) {
        dispatch(removeItem(item))
        toast.success('Item removido do carrinho', {
            position: 'bottom-left'
        })
    }

    function handleDecrementItem(item){
        dispatch(decrementItem(item))
    }

    function handleIncrementItem(item){
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
    return (
        <Container>
            <Content>                
                <div><X size={32} weight="bold" onClick={close} /></div>
                <h1>Sacola de compras</h1>                
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
                                    <img src={item.imageUrl} alt={item.name} />
                                    <div>
                                        <span>{item.name}</span>
                                        <p>{ valueItems }</p>
                                        <RemoveAddItem>
                                            <span>
                                                <Minus size={12} onClick={() => handleDecrementItem(item)}/>
                                                {item.quantatyItem}
                                                <Plus size={12} onClick={() => handleIncrementItem(item)}/>
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
                        <span>{}</span>
                    </div>
                    <button onClick={handleBuyProduct}>Finalizar compra</button>
                </Finalize>
            
        </Container>
    )
}