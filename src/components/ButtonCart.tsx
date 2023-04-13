import { Handbag } from "phosphor-react";
import { useSelector } from "react-redux";
import { SelectCartState } from "../store/cart";

export function ButtonCart({ show }) {
    const items = useSelector(SelectCartState)
    return (
        <>
            <button onClick={show}>
                <div>
                    <Handbag size={18} weight="bold" />
                    <div>{items.items.length}</div>
                </div>
            </button>
        </>
    )
}