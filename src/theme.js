import { createMuiTheme } from '@material-ui/core/styles';
export const theme = createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#fafafa',
    },
    primary: {
      light: '#c2c3bf',
      main: '#f6f6f6',
      dark: '#646562',
      contrastText: '#fff',
    },
    secondary: {
      main: '#8f9192',
    },
  },
});
export default theme;
