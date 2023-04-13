import { useDispatch, useSelector } from "react-redux";
import { Container, Content, Finalize, Item, RemoveAddItem } from "../styles/pages/Cart";
import { Minus, Plus, X } from "phosphor-react";
import { SelectCartState, addOneItem, removeItem } from "../store/cart";
import { toast } from "react-toastify";


export function Cart({ close }) {
    const cart = useSelector(SelectCartState)
    const dispatch = useDispatch()
    console.log(cart)

    function handleRemoveItem(item) {
        dispatch(removeItem(item))
        toast.success('Item removido do carrinho', {
            position: 'bottom-left'
        })
    }
    function handleDecrementItem(item){

    }
    function handleIncrementItem(item){
        dispatch(addOneItem(item))
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
                        return (
                            <div>
                                <Item key={item.id}>
                                    <img src={item.imageUrl} alt={item.name} />
                                    <div>
                                        <span>{item.name}</span>
                                        <p>{(item.price) * item.quantatyItem}</p>
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
                        <p>2</p>
                    </div>
                    <div>
                        <span>Valor total</span>
                        <span>R$ 219,90</span>
                    </div>
                    <button>Finalizar compra</button>
                </Finalize>
            
        </Container>
    )
}