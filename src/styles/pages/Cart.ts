import Link from "next/link";
import { keyframes, styled } from "..";  

export const slideIn  = keyframes({
    '0%': { transform: 'translateX(100%)' },
    '100%': { transform: 'translateX(0)' },
  });
  export const slideOut  = keyframes({
      '100%': { transform: 'translateX(100%)'},
      '0%': { transform: 'translateX(0)' },
  });

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
    height: '82%',
    flexDirection: 'column',
    '.fechar':{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    h1:{
        fontSize: '$2xl',
    },
    svg:{
        display: 'flex',
        alignItems: 'end',
        justifyContent: 'end',
        right: '0',
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
    '.image': {
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
        fontWeight: 'bold',

        '&:hover': {
            color: '$green300',
        }
    }
})

export const Finalize = styled('div', {
    width: '100%',
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
        width: '100%',
        height: '3rem',
        border: 'none',
        borderRadius: '6px',
        marginTop: '1rem',
        color: '$white',
        cursor:'pointer',
        
        '&:hover': {
            backgroundColor: '$green500',
        },

        '&:disabled': {
            opacity: 0.6,
            cursor: 'not-allowed',
        },

        '&:not(:disabled)hover': {
            backgroundColor: '$green300',
        }
    },

    '.Link':{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        background: 'none',
        textDecoration: 'none',
        border: 'none',
        color: '$green500',
        fontSize: '16px',
        fontWeight: 'bold',
        marginTop: '10px',

        '&:hover': {
            color: '$green300',
        }
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
