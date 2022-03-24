
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider, createTheme, Theme } from '@mui/material/styles';
import type { Components, Direction, PaletteOptions } from '@mui/material';
import { Shape } from '@mui/system';

declare module '@mui/material/styles' {
  interface Palette {
    apes: {
      purplePleasure: Palette['primary'];
      creamyCoral: Palette['primary'];
      serengetiGreen: React.CSSProperties['color'];
      offBlack: React.CSSProperties['color'];
      argent: React.CSSProperties['color'];
      palladium: React.CSSProperties['color'];
      kinglyCloud: React.CSSProperties['color'];
      bleachedSilk: React.CSSProperties['color'];
      white: React.CSSProperties['color'];
    }
  }
  interface PaletteOptions {
    apes: {
      purplePleasure: PaletteOptions['primary'];
      creamyCoral: PaletteOptions['primary'];
      serengetiGreen: React.CSSProperties['color'];
      offBlack: React.CSSProperties['color'];
      argent: React.CSSProperties['color'];
      palladium: React.CSSProperties['color'];
      kinglyCloud: React.CSSProperties['color'];
      bleachedSilk: React.CSSProperties['color'];
      white: React.CSSProperties['color'];
    }
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    warning: true;
    outlined: false;
    contained: false;
    text: false
  }
}

const shape: Partial<Shape> = {
  borderRadius: '12px',
}
const direction: Direction = 'rtl'
const palette: PaletteOptions = {
  apes: {
    purplePleasure: {
      main: '#7E4A9B',
      light: 'rgba(126, 74, 155, 0.12)',
      dark: '#612B80'
    },
    creamyCoral: {
      main: '#E2778A',
      light: 'rgba(226, 119, 138, 0.16)',
      dark: '#CB6678'
    },
    serengetiGreen: '#78CB8F',
    offBlack: '#303030',
    argent: '#888888',
    palladium: '#B1B1B1',
    kinglyCloud: '#DFDFDF',
    bleachedSilk: '#F2F2F2',
    white: '#FFFFFF',
  },
  common: { black: '#303030', white: '#FFFFFF' },
  primary: { main: '#7E4A9B' }, // disabled is primary with 0.4 opacity // shadow is primary with 0.12 opacity
  secondary: { main: '#7E4A9B' },
  success: {
    main: '#78CB8F',
    contrastText: "#ffffff"
  },
  error: {
    main: '#E2778A',
    contrastText: "#ffffff"
  }
}

const typography = {
  allVariants: {
    fontFamily: 'aktiv-grotesk, sans-serif',
  }
}
const components: Components<Theme> = {
  MuiCssBaseline: {
    styleOverrides: {
      transitionDuration: '300',
      transition: 'ease-in-out',
      'input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-results-button, input[type="search"]::-webkit-search-results-decoration': {
        display: 'none'
      },
      "& .Mui-disabled": {
        pointerEvents: 'all !important',
        cursor: 'not-allowed !important'
      },

    }
  },
  MuiDivider: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        borderColor: theme.palette.apes.bleachedSilk,
        borderWidth: "1px"
      })
    }
  },
  MuiChip: {
    styleOverrides: {
      root: {
        fontFamily: 'aktiv-grotesk, sans-serif',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '12px',
        lineHeight: '130%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        letterSpacing: 'normal',
        minHeight: '24px',
        maxHeight: '24px',
        borderRadius: '12px'
      },
      label: {
        paddingLeft: '8px',
        paddingRight: '10px',
        letterSpacing: '0.01rem',
        padding: '0px 8.5px 0px 8px',
        fontWeight: '500',
      },
      colorPrimary: {
        color: 'white !important'
      },
      colorSecondary: {
        color: 'white'
      }
    }
  },
  MuiIconButton: {
    defaultProps: {
      disableFocusRipple: true,
      disableRipple: true,
      disableTouchRipple: true,
    },
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => {
        return ({
          fontFamily: 'aktiv-grotesk, sans-serif',
          fontStyle: 'normal',
          fontWeight: 600,
          lineHeight: '130%',
          borderRadius: '12px',
          aspectRatio: 1,
          color: theme.palette.apes.palladium,
          background: '#FFFFF',
          border: `2px solid ${theme.palette.apes.kinglyCloud}`,
          transition: '0.3s',
          '&:hover': {
            border: `2px solid ${theme.palette.apes.palladium}`,
            color: theme.palette.apes.purplePleasure.main,
            background: theme.palette.apes.white
          },
          '&:focus': {
            color: theme.palette.apes.purplePleasure.main,
            border: `2px solid ${theme.palette.apes.purplePleasure.main}`,
            boxSizing: 'border-box',
            boxShadow: `0px 0px 0px 4px ${theme.palette.apes.purplePleasure.light}`,
            background: theme.palette.apes.white
          },
          '&:disabled': {
            background: theme.palette.apes.white,
            color: theme.palette.apes.palladium,
            border: `2px solid ${theme.palette.apes.kinglyCloud}`,
            opacity: '0.6'
          },
        })
      },
      sizeLarge: {
        fontSize: '36px',
        height: '60px',
        width: '60px',
      },
      sizeMedium: {
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
      disableTouchRipple: true,
      disableRipple: true,
    },
    variants: [
      {
        props: { variant: 'primary' },
        style: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.common.white,
          border: `2px solid ${theme.palette.apes.purplePleasure.main}`,
          background: theme.palette.apes.purplePleasure.main,
          fontFamily: 'aktiv-grotesk, sans-serif !important',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '16.9px',
          textAlign: 'center',
          fontSize: '13px',
          height: '52px',
          maxWidth: '256px',
          minWidth: '256px',
          '&:hover': {
            border: `2px solid ${theme.palette.apes.purplePleasure.dark}`,
            background: theme.palette.apes.purplePleasure.dark,
            color: theme.palette.common.white,
          },
          '&:focus': {
            boxSizing: 'border-box',
            boxShadow: `0px 0px 0px 4px ${theme.palette.apes.purplePleasure.light}`,
            border: `2px solid ${theme.palette.apes.purplePleasure.main}`,
            background: theme.palette.apes.purplePleasure.main,
            color: theme.palette.common.white,
          },

          '&:disabled': {
            border: `2px solid ${theme.palette.apes.purplePleasure.main} `,
            background: theme.palette.apes.purplePleasure.main,
            color: theme.palette.common.white,
            opacity: 0.4,
          },
        }),
      },
      {
        props: { variant: 'secondary' },
        style: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.apes.offBlack,
          background: theme.palette.apes.white,
          border: `2px solid ${theme.palette.apes.kinglyCloud}`,
          '& .MuiButton-startIcon,.MuiButton-endIcon': {
            color: theme.palette.apes.palladium,
          },
          '&:hover': {
            color: theme.palette.apes.offBlack,
            border: `2px solid ${theme.palette.apes.palladium}`,
            background: theme.palette.apes.white,
            '& .MuiButton-startIcon,.MuiButton-endIcon': {
              color: theme.palette.apes.purplePleasure.main,
            }
          },
          '&:focus': {
            color: theme.palette.apes.offBlack,
            background: theme.palette.apes.white,
            border: `2px solid ${theme.palette.apes.purplePleasure.main} `,
            boxSizing: 'border-box',
            boxShadow: `0px 0px 0px 4px ${theme.palette.apes.purplePleasure.light}`,
            '& .MuiButton-startIcon,.MuiButton-endIcon': {
              color: theme.palette.apes.purplePleasure.main,
            }
          },
          '&:disabled': {
            color: theme.palette.apes.offBlack,
            background: theme.palette.apes.white,
            border: `2px solid ${theme.palette.apes.kinglyCloud}`,
            opacity: 0.6,
            '& .MuiButton-startIcon,.MuiButton-endIcon': {
              color: theme.palette.apes.palladium,
            }
          }
        }),
      },
      {
        props: { variant: 'warning' },
        style: ({ theme }: { theme: Theme }) => ({
          color: theme.palette.common.white,
          border: `2px solid ${theme.palette.apes.creamyCoral.main}`,
          background: theme.palette.apes.creamyCoral.main,
          fontFamily: 'aktiv-grotesk, sans-serif !important',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '16.9px',
          textAlign: 'center',
          fontSize: '13px',
          height: '52px',
          maxWidth: '256px',
          minWidth: '256px',
          '&:hover': {
            border: `2px solid ${theme.palette.apes.creamyCoral.dark}`,
            background: theme.palette.apes.creamyCoral.dark,
            color: theme.palette.common.white,
          },
          '&:focus': {
            boxSizing: 'border-box',
            boxShadow: `0px 0px 0px 4px ${theme.palette.apes.creamyCoral.light}`,
            border: `2px solid ${theme.palette.apes.creamyCoral.main}`,
            background: theme.palette.apes.creamyCoral.main,
            color: theme.palette.common.white,
          },

          '&:disabled': {
            border: `2px solid ${theme.palette.apes.creamyCoral.main} `,
            background: theme.palette.apes.creamyCoral.main,
            color: theme.palette.common.white,
            opacity: 0.4,
          },
        }),
      },
    ],

    styleOverrides: {
      root: () => {
        return ({
          textTransform: 'none',
          letterSpacing: 'normal',
          fontFamily: 'aktiv-grotesk, sans-serif !important',
          fontStyle: 'normal',
          fontWeight: 700,
          lineHeight: '16.9px',
          textAlign: 'center',
          fontSize: '13px',
          height: '52px',
          maxWidth: '256px',
          minWidth: '256px',
          transition: '0.3s'
        })
      },
      sizeMedium: {
        fontSize: '13px',
        height: '52px'
      },
      sizeSmall: {
        fontSize: '13px',
        height: '44px'
      },
    },
  },
  MuiSelect: {
    styleOverrides: {

      select: ({ theme }: { theme: Theme }) => ({
        minWidth: '252px',
        boxSizing: 'border-box',
        height: '52px',
        background: theme.palette.apes.white,
        border: `2px solid  ${theme.palette.apes.kinglyCloud}`,
        padding: '14px 14px',

        '&:focus': {
          boxSizing: 'border-box',
          boxShadow: `0px 0px 0px 4px ${theme.palette.apes.purplePleasure.light}`,
          border: `2px solid ${theme.palette.apes.purplePleasure.main}`,
        },
        '&:hover': {
          boxSizing: 'border-box',
          border: `2px solid ${theme.palette.apes.purplePleasure.main}`,
        },
      }),
      // @ts-ignore
      root: ({ theme }: { theme: Theme }) => ({
        background: theme.palette.apes.white,
        border: `2px solid ${theme.palette.apes.white}`,
        '&:hover': {
          boxSizing: 'border-box',
          border: `2px solid ${theme.palette.apes.white} !important`,
        },

        '&:hover:not': {
          boxSizing: 'border-box',
          border: `2px solid red`,
        },
        "& .Mui-disabled": {
          boxSizing: 'border-box',
          opacity: 0.6,
          background: theme.palette.apes.white,
          cursor: 'not-allowed',
          color: `${theme.palette.apes.offBlack}`,
          '&:hover': {
            boxSizing: 'border-box',
            border: `2px solid ${theme.palette.apes.kinglyCloud}`
          },
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
  },
  MuiInputBase: {
    styleOverrides: {
      input: ({ theme }: { theme: Theme }) => ({
        height: '52px',
        transition: '0.3s',
        fontSize: '15px',
        '&::placeholder': {
          textOverflow: 'ellipsis',
          color: theme.palette.apes.argent,
        },

      }),

      root: ({ theme }: { theme: Theme }) => ({
        backgroundColor: theme.palette.apes.bleachedSilk,
        color: theme.palette.apes.offBlack,
        height: '52px',
        minWidth: '392px',
        transition: '0.3s',
        border: `2px solid ${theme.palette.apes.bleachedSilk}`,

        '&:focus': {
          border: `2px solid ${theme.palette.apes.purplePleasure.main}`,
          boxSizing: 'border-box',
          boxShadow: `0px 0px 0px 4px ${theme.palette.apes.purplePleasure.light}`,
        },

      }),
    }
  },
  MuiTextField: {
    styleOverrides: {
      root: ({ theme }: { theme: Theme }) => ({
        transition: '0.3s',
        ".MuiInputBase-multiline": {
          height: '100%',
          "&.MuiOutlinedInput-root": {
            padding: '0 13px 11px 13px',
            letterSpacing: 'normal',
          },
        },
        "& .MuiOutlinedInput-root.Mui-focused": {
          border: `2px solid ${theme.palette.apes.purplePleasure.main}`,
          boxSizing: 'border-box',
          boxShadow: `0px 0px 0px 4px ${theme.palette.apes.purplePleasure.light}`,
          borderRadius: '12px'
        },
        '& input[type=search] ~ .MuiInputAdornment-root': {
          background: 'transparent'
        },
        "& .MuiOutlinedInput-root": {

          '&:hover': {
            border: `2px solid ${theme.palette.apes.purplePleasure.main}`,
            "& .MuiInputAdornment-root": {
              '& *': {
                // color: theme.palette.apes.purplePleasure.main,
              },
            }
          },
        },
        "& .MuiOutlinedInput-root.Mui-disabled": {
          border: `2px solid ${theme.palette.apes.bleachedSilk}`,
          '&:hover': {
            border: `2px solid ${theme.palette.apes.bleachedSilk}`,
          },
        },
        "& .MuiOutlinedInput-root.Mui-error": {
          border: `2px solid ${theme.palette.apes.creamyCoral.main}`,
          '&:hover': {
            border: `2px solid ${theme.palette.apes.creamyCoral.main}`,
          },
          '&:focus': {
            border: `2px solid ${theme.palette.apes.creamyCoral.main}`,
            boxSizing: 'border-box',
            boxShadow: `0px 0px 0px 4px rgba(226, 119, 138, 0.16)`,
            borderRadius: '12px'
          },
        },
      })
    }
  },
  MuiInputAdornment: {
    styleOverrides: {

      positionStart: ({ theme }: { theme: Theme }) => ({
        borderTopLeftRadius: '12px',
        borderBottomLeftRadius: '12px',
        background: 'white',
        position: 'relative',
        padding: '24px 12px',
        marginLeft: '-14px',
        marginRight: '17px',
        color: theme.palette.apes.argent,
        letterSpacing: 'normal',

        // '&:hover': {
        //   '& *': {
        //     color: theme.palette.apes.purplePleasure.main,
        //   },
        // },
      }),
      positionEnd: ({ theme }: { theme: Theme }) => ({
        borderTopRightRadius: '12px',
        borderBottomRightRadius: '12px',
        background: 'white',
        position: 'relative',
        padding: '24px 12px',
        marginRight: '-14px',
        color: theme.palette.apes.argent,
        letterSpacing: 'normal'
      })
    }
  },

}
// const theme = createTheme(deepmerge(shape, direction, pallete, typography));
const theme = createTheme({
  shape,
  direction,
  palette,
  typography,
  components
});

type Props = {}

export default function ThemeProvider({ children }: React.PropsWithChildren<Props>) {
  return (
    <MuiThemeProvider theme={theme} >
      <CssBaseline />
      {children}
    </MuiThemeProvider >
  )
}