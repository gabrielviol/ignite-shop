import { styled } from "..";

export const Container = styled('div', {
    width: '35%',
    height: '100%',
    backgroundColor: '$gray800',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    position: 'absolute',
    right: '0px',
    padding: '3rem',
    h1:{
        marginTop: '3rem',
        marginBottom: '2rem',
    }
})

export const Item = styled('div', {
    width: '100%',
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
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
    gap: '1rem',
    div: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        
    },
    button: {
        width: '70%',
        margin: '0 60px',
        marginTop: '2rem',
    }
})
