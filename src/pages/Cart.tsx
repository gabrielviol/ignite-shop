import { Container, Finalize, Item } from "../styles/pages/Cart";


export function Cart() {
    return (
        <Container>
            <h1>Sacola de compras</h1>
            <Item>
                <img src="https://files.stripe.com/links/MDB8YWNjdF8xTHFKWWtMN0h3eEV4VHdrfGZsX3Rlc3RfdDdKZ2JwSGJBa0dlWlh1eUpORmdPMTR200obx348I2" alt="" />
                <div>
                    <span>Camiseta rockseat</span>
                    <p>R$ 99,90</p>
                    <button>Remover</button>
                </div>
            </Item>
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