import {MIN_LANDSCAPE_MOBILE_WIDTH} from '../utils/constants/dimens'

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
    },
    h1:{
      color: 'pink'
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
    fontFamily: 'Raleway',

    h1:{ 
      '@media (max-width:575px)': {
        fontSize: '2.5rem',
      },
    },
    h2:{ 
      '@media (max-width:575px)': {
        fontSize: '2rem',
      },
    },
    body1:{ 
      lineHeight:"2.5em",
      '@media (max-width:575px)': {
        fontSize: '0.75rem',
      },
    },
    body2:{ 
      '@media (max-width:575px)': {
        fontSize: '0.45rem',
      },
    },
    caption:{ 
      '@media (max-width:575px)': {
        fontSize: '0.25rem',
      },
    },
    h3:{ 
      '@media (max-width:575px)': {
        fontSize: '1.5rem',
      },
    },
    h4:{ 
      '@media (max-width:575px)': {
        fontSize: '1rem',
      },
    },
    h5:{ 
      '@media (max-width:575px)': {
        fontSize: '0.75rem',
      },
    },
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
    fontFamily: 'Roboto',
    h1: {
      fontFamily: 'Playfair Display',
    }, 
    h2: {
      fontFamily: 'Playfair Display'
    },
    h3: {
      fontFamily: 'Playfair Display'
    },
    h4: {
      fontFamily: 'Playfair Display'
    },
    h5: {
      fontFamily: 'Playfair Display'
    },
  }
})

export { theme, bottomsUpTheme, psdsTheme };