import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#402837',
    },
    secondary: {
      main: '#38718F',
    },
    background: {
      default: '#F8F9FD',
    },
    text: {
      primary: '#260521',
      secondary: '#EA02B3'
    }
  },

  typography: {
    body1: {
      color: '#EA02B3'
    }
  }
})

const bottomsUpTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#305538',
    },
    secondary: {
      main: '#EF3D4C',
    },
    background: {
      default: '#FFFDF4',
    },
    text: {
      primary: '#525252',
      secondary: '#EF3D4C'
    }
  },

  typography: {
    fontFamily: 'Abril Fatface',

  },
})

const psdsTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#87ABA9'
    },
    secondary: {
      main: '#E17200'
    },
    background: {
      default: '#FCFFFD'
    },
    text: {
      primary: '#7A7A7A',
    }

  },

  typography: {
    fontFamily: 'Playfair Display'
  }
})

export { theme, bottomsUpTheme };