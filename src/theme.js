import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ff0000',
        },
        secondary: {
            main: '#FFFF00',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: 'yellow',
        },
    },
});

export default theme;