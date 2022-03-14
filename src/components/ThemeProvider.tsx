
import React from 'react'
import { ButtonProps, createTheme, Theme, ThemeProvider as MuiThemeProvider} from '@mui/material';
// When using TypeScript 4.x and above
import type {} from '@mui/lab/themeAugmentation';
import zIndex from '@mui/material/styles/zIndex';



const theme = createTheme({
  shape: {
    borderRadius: '12px',
  },
  direction: 'rtl',
  palette: {
    common: {
      black: '#303030',
      white: '#FFFFFF',
    },
    primary: {
      main: '#7E4A9B',
      dark: '#612B80',
      light: '#efe9f3',
      contrastText: '#FFFFFF'
      // light: 'rgba(126, 74, 155, 0.12)'
    },
    secondary: {
      main: '#E2778A',
      dark: '#e24e69',
      light: '#e4b0ba',
      contrastText: '#FFFFFF'
    },
    success: {
      dark: '#285c2a',
      main: '#71c976',
      light: "#a8ccaa",
      contrastText: '#FFFFFF'
    },
    error: {
      dark: '#741a1a',
      main: '#d32f2f',
      light: '#caa5a5',
      contrastText: '#FFFFFF'
    }
  },
  typography: {
    allVariants: {
      fontFamily: 'aktiv-grotesk, sans-serif',
    }
  },
  components: {

   
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#F2F2F2',
          borderWidth: "2px"
        }
      }
    },
   
    MuiIconButton: {
      defaultProps: {
        disableFocusRipple: true
      },
      styleOverrides: {
        root: ({ theme, ownerState }: { theme: Theme, ownerState: ButtonProps }) => {
          console.log({theme, ownerState})
          return ({
            fontFamily: 'aktiv-grotesk, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '130%',
            borderRadius: '12px',
            aspectRatio: 1,
            // @ts-ignore
            color: theme.palette[ownerState.color === 'default' ? 'primary' : ownerState.color].main,
            // color: '#B1B1B1',
            background: '#FFFFF',
            // @ts-ignore
            border: `2px solid ${theme.palette[ownerState.color === 'default' ? 'primary' : ownerState.color].main}`,
            // border: '2px solid #DFDFDF',

            '&:focus': {
              boxSizing: 'border-box',
              // @ts-ignore
              boxShadow: `0px 0px 0px 4px ${theme.palette[ownerState.color === 'default' ? 'primary' : ownerState.color].light}`,
              // @ts-ignore
              border: `2px solid ${theme.palette[ownerState.color === 'default' ? 'primary' : ownerState.color].dark}`,
              // border: 2px solid #7E4A9B',
              // color: '#7E4A9B',
              background: 'transparent'
            },
            '&:hover': {
              // @ts-ignore
              color: theme.palette[ownerState.color === 'default' ? 'primary' : ownerState.color].dark,
              // color: theme.palette.primary.dark,
              // color: '#7E4A9B',
              // @ts-ignore
              border: `2px solid ${theme.palette[ownerState.color === 'default' ? 'primary' : ownerState.color].dark}`,
              // border: '2px solid #B1B1B1',
              background: 'transparent'
            },
            '&:disabled': {
              border: '2px solid #DFDFDF',
              opacity: '0.4',
              background: 'transparent'
            },
          })
        },
        sizeLarge: {
          fontSize: '36px',
          height: '60px',
          width: '60px',
        },
        sizeMedium: {
          // fontSize: '15px',
          fontSize: '28px',
          height: '52px',
          width: '52px',
        },
        sizeSmall: {
          fontSize: '20px',
          height: '44px',
          width: '44px',
        },
      }
    },
    MuiButton: {
      defaultProps: {
        disableFocusRipple: true,
      },
      styleOverrides: {
        
        root: ({theme, ownerState} :{theme: Theme, ownerState: ButtonProps}) => {
          return ({
            fontFamily: 'aktiv-grotesk, sans-serif',
            fontStyle: 'normal',
            fontWeight: 600,
            lineHeight: '130%',
            // color: '#303030',
            // color: theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].main,
            border: `2px solid ${theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].main}`,
            // border: '2px solid #DFDFDF',
            '&:focus': {
              boxSizing: 'border-box',
              boxShadow: `0px 0px 0px 4px ${theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].light}`,
              border: `2px solid ${theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].dark}`,
              // color: theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].contrastText,
            },
            '&:hover': {
              border: `2px solid ${theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].dark}`,

              // color: theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].dark
            },
            '&:disabled': {
              border: `2px solid ${theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].main}`,
              // border: '2px solid #DFDFDF',
              opacity: '0.4'
            },
          })
        },
        containedPrimary: ({ theme, ownerState }: { theme: Theme, ownerState: ButtonProps }) => ({
          // border: `2px solid ${theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].dark}`,
          
          // border: 'none',
          color: theme.palette.common.white  + ' !important',
          '&:disabled': {
            border: `2px solid ${theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].main}  !important`,
            background: theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].main,
            color: theme.palette.common.white + ' !important',
          },
          '&:hover': {
            border: `2px solid ${theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].dark} !important`,
            background: theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].dark,
            color: theme.palette.common.white + ' !important',
          },
          '&:focus': {
            boxSizing: 'border-box',
            boxShadow: `0px 0px 0px 4px ${theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].light}`,
            border: '0px solid red',
            color: theme.palette.common.white + ' !important',
          }
        }),
        
        outlined: ({theme, ownerState} :{theme: Theme, ownerState: ButtonProps}) => ({
          '&:hover': {
            background: 'transparent',  
            border: `2px solid ${theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].dark}`,
            // border: '2px solid #B1B1B1'
            color: theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].dark
          },
        }),
        text: ({theme, ownerState} :{theme: Theme, ownerState: ButtonProps}) => ({
          border: `2px solid ${theme.palette.common.white}`,
          '&:hover': {
            background: 'white',
            // border: `2px solid ${theme.palette[ownerState.color === 'inherit' || ownerState.color === undefined ? 'primary' : ownerState.color].dark}`,
            // border: '2px solid #B1B1B1'
          },
          '&:disabled': {
              border: `none`,
            },
        }),
        sizeLarge: {
          padding: '0 116px',
          fontSize: '16px',
          height: '60px'
        },
        sizeMedium: {
          padding: '0 100px',
          fontSize: '15px',
          height: '52px'
        },
        sizeSmall: {
          padding: '0 84px',
          fontSize: '14px',
          height: '44px'
        },
       

      },
    },
    MuiSelect: {
      styleOverrides: {
        disabled: {
          cursor: 'not-allowed'
        },
        select: ({theme, ownerState} :{theme: Theme, ownerState: ButtonProps}) => ({
          border: `2px solid #DFDFDF`,
          minWidth: '252px',
          // height: '52px',
          padding: '13px 15px 12px 15px',
          fontSize: '15px',
          '&:hover:enabled': {
            background: 'white',
            border: `2px solid ${theme.palette.primary.dark}`,
            // border: '2px solid #B1B1B1'
          },
          '&:focus': {
            boxSizing: 'border-box',
            boxShadow: `0px 0px 0px 4px ${theme.palette.primary.light}`,
            border: `2px solid ${theme.palette.primary.main}`,
          },
          '&:disabled': {
            border: '2px solid #DFDFDF',
            opacity: '0.4',
            background: 'transparent',
            cursor: 'not-allowed'
          },
        }),   
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: 'none'
        }
      }
    }
    
  },
});

type Props = {}

export default function ThemeProvider({ children }: React.PropsWithChildren<Props>) {
  return (
    <MuiThemeProvider theme={theme}>
      {children}
    </MuiThemeProvider>
  )
}