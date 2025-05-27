import { createTheme } from '@mui/material';
import { blueGrey, cyan, orange, blue, lime, indigo } from '@mui/material/colors'

export const MasterTheme = createTheme({
    palette: {
        primary: {
            main: '#008000',
            light: '#90EE90',
            dark: '#006400',
        },
        secondary: {
            // main: orange[300],
            main: indigo[400],
            light: '#f50057',
            dark: '#c51162',
        },
        special: {
            main: orange[500],
            // light: orange[300],
            sec: blueGrey[100],
            third: cyan[400]
        },
        customColors: {
            specialMain: orange[500],
            specialLight: blueGrey[100],
            specialAccent: cyan[400],
        },
    },
    typography: {
        fontFamily: 'Quicksand, monospace',
        // fontSize: '8rem',
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