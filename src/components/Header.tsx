import Image from 'next/image';
import logoImg from '../assets/logo.svg'
import { Headerr } from "../styles/pages/app";
import { ButtonCart } from './ButtonCart';
import { Cart } from './Cart';
import { useState } from 'react';


export function Header() {
    const [ show, setShow ] = useState(false)
    const handleClose = () => {setShow(false)}
    const handleShow = () => setShow(true)
    return (
        <>
            <Headerr>
                <Image src={logoImg} alt="" />
                <ButtonCart show={handleShow}/>
            </Headerr>
            {!show ? '' : <Cart close={handleClose}/>    }
                         
        </>
    )
}