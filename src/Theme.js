import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
          // Purple and green play nicely together.
          main: '#000',
        },
        secondary: {
          // This is green.A700 as hex.
          main: '#11cb5f',
        },
      },
    overrides: {
      MuiIconButton: {
        root: {
          '&:hover': {
            backgroundColor: "inherit"
          }
        },
        MuiButton: {
            root: {
              '&:hover': {
                backgroundColor: "white"
              }
            }
          },
          MuiAppBar: {
            root: {
              color: 'transparent'
            }
          }
      }
    }
  })

export default theme

 