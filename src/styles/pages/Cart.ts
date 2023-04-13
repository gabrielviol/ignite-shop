import { styled } from "..";

export const Container = styled('div', {
    width: '35%',
    height: '100%',
    backgroundColor: '$gray800',
    position: 'absolute',
    right: '0px',
    padding: '2rem 3rem',
    zIndex: '1',   
})

export const Content = styled('div', {
    display: 'flex',
    height: '85%',
    flexDirection: 'column',
    svg:{
        cursor: 'pointer',
    }
})

export const Item = styled('div', {
    width: '100%',
    marginTop:'2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '2rem',
    img: {
        width: '6rem',
        height: '6rem',
        background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
        borderRadius: '8px',
    },
    div: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    button:{
        width: '5rem',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        color: '$green500',
        fontSize: '14px',
        fontWeight: 'bold'
    }
})

export const Finalize = styled('div', {
    div: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '0.5rem'
    },
    button: {
        fontSize: 'medium',
        fontWeight: 'normal',
        background: '$green300',
        alignItems: 'center',
        width: '20rem',
        height: '3rem',
        margin: '0 50px',
        border: 'none',
        borderRadius: '6px',
        marginTop: '1rem',
        color: '$white'
    }
})

export const RemoveAddItem = styled('span', {
    display: 'flex',
    gap: '1rem',
    span:{
        display: 'flex',
        alignItems: 'center',
        gap:'0.5rem'
    }
})

