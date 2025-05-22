import { createTheme, ThemeProvider } from '@mui/material';
import { blueGrey, cyan, orange } from '@mui/material/colors'

export const MasterTheme = createTheme({
    palette: {
        primary: {
            main: '#008000',
            light: '#90EE90',
            dark: '#006400',
        },
        secondary: {
            main: '#dc004e',
            light: '#f50057',
            dark: '#c51162',
        },
        special: {
            main: '#FFC0CB',
            sec: blueGrey[100],
            third: cyan[400]
        },
    },
    typography: {
        fontFamily: 'Quicksand, monospace',
        // fontSize: '4rem',
        fontWeightBold: 700,
        fontWeightMedium: 500,
        fontWeightRegular: 400,

        h1: {
            fontSize: '2rem',
            fontWeight: 700,
        },
        body1: {
            fontSize: '1rem',
        },
        caption: {
            fontSize: '0.8rem',
        },
        button: {
            textTransform: 'none',
            fontSize: '1rem',
        },
    },
    spacing: 8,

})