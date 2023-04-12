import { styled } from "..";

export const Container = styled('div', {
    width: '35%',
    height: '100%',
    backgroundColor: '$gray800',
    position: 'absolute',
    right: '0px',
    padding: '3rem',
    zIndex: '1',   
})

export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    '& > div:first-child': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        div:{
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'end',
            width: '100%'
        }
    },
    h1:{
        marginBottom: '3rem',
    },
    svg:{
        cursor: 'pointer'
    }
})

export const Item = styled('div', {
    width: '100%',
    height: '100%',
    display: 'flex',
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
    }
})

export const Finalize = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    gap: '1rem',
    div: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    button: {
    }
})


