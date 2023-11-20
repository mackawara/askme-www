import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#2a324bff',
            light: '#50576eff',
            dark: '#917c75ff',
        },
        secondary: {
            main: '#767b91ff',
        },
        background: {
            default: '#c7ccdbff',
            paper: '#e1e5eeff',
        },
        border: {
            main: '#f7c59fff',
        },
    },
    typography: {
        fontFamily: 'Lato, poppins, Montserrati',
        h1: {
            fontSize: '2.4rem',
            fontWeight: 700,
            fontFamily: 'Montserrati'
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            fontFamily: 'Montserrati'
        },
        h4: {
            fontSize: '1.6rem',
            fontWeight: 500,
            fontFamily: 'Montserrati'
        },
        h5: {
            fontSize: '1.4rem',
            fontWeight: 400,
            fontFamily: 'Montserrati'
        },
        h6: {
            fontSize: '1.2rem',
            fontWeight: 300,
            fontFamily: 'Montserrati'
        },
        body1: {
            fontSize: '16px',
            fontFamily: 'Lato'
        },
        button: {
            fontSize: '16px',
            fontWeight: 500,
            fontFamily: 'poppins'
        },
    },
});

export default theme;