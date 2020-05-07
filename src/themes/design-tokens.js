const designTokens = {
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    primary: {
      light: '#d6cbd3',
      main: '#eca1a6',
      dark: '#bdcebe',
      contrastText: '#ada397'
    },
    secondary: {
      light: '#a2b9bc',
      main: '#b2ad7f',
      dark: '#878f99',
      contrastText: '#6b5b95'
    },
    error: {
      light: '#f4e1d2',
      main: '#f18973',
      dark: '#b2b2b2',
      contrastText: '#bc5a45'
    },
    info: {
      light: '#fefbd8',
      main: '#d5f4e6',
      dark: '#80ced6',
      contrastText: '#618685'
    },
    success: {
      light: '#d5e1df',
      main: '#e3eaa7',
      dark: '#b5e7a0',
      contrastText: '#86af49'
    },
    // grey: {
    //   50:
    //   100:
    //   200:
    //   300:
    //   400:
    //   500:
    // },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.38)'
    },
    background: {
      paper: '#fff',
      default: '#fafafa'
    }
  },
  typography: {
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 300,
      fontSize: "6rem",
      lineHeight: 1.167,
      letterSpacing: "-0.01562em"
    },
    subtitle1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem", 
      lineHeight: 1.75,
      letterSpacing: "0.00938em"
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em"
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
      textTransform: "uppercase",
      letterSpacing: "0.02857em"
    }
  },
  shape: {
    borderRadius: '4px'
  }
}

export default designTokens;