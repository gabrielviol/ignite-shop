import { Handbag } from "phosphor-react";
import { Cart } from "./Cart";

export function ButtonCart() {
    function handleShow(){

    }

    return (
        <>
        
        <button onClick={handleShow}>            
            <div>
                <Handbag size={18} weight="bold" />
                <div>1</div>
            </div>
        </button>
        </>
    )
}