import { styled } from "..";

export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',
})

export const Header = styled('header', {
    padding: '2rem 0',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 1180,
    margin: '0 auto',
    
    button:{
        border: 'none',
        background: 'none',
        color: 'white',
        fontSize: '15px'
    },

    svg: {
        display: 'flex',
        alignItems: 'center',
        width: '50px',
        height: '50px',
        padding: '12px',
        borderRadius: '6px',

        color: '#C4C4CC',
        backgroundColor: '#202024',
    },
    div : { 
        cursor: 'pointer',
        
        div: {
        position: 'absolute',
        background: 'rgb(0, 135, 95)',
        borderRadius: '999px',
        width: '22px',
        height: '22px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '-58px 35px',
    }}
})