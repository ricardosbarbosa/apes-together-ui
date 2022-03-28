import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material"
import { CheckCircle, Info, WarningCircle } from 'phosphor-react';


declare module '@mui/material/Alert' {
  export interface AlertPropsVariantOverrides {
    standard: false
    filled: false
    outlined: false
    info: false
  }

  export interface AlertPropsColorOverrides {
    info: true
    success: true
    warning: true
    error: false
  }
}

const MuiAlert: {
  defaultProps?: ComponentsProps['MuiAlert'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiAlert'];
  variants?: ComponentsVariants['MuiAlert'];
} = {
  defaultProps: {
    iconMapping: {
      success: <CheckCircle size={20} weight="fill" />,
      warning: <WarningCircle size={20} weight="fill" />,
      info: <Info size={20} weight={'fill'} />,
    },
  },
  variants: [
    {
      props: { severity: 'success' },
      style: ({ theme }: { theme: Theme }) => ({
        '& .MuiAlert-icon': {
          color: `${theme.palette.apes.serengetiGreen} !important`
        },
      }),
    },
    {
      props: { severity: 'info' },
      style: ({ theme }: { theme: Theme }) => ({
        '& .MuiAlert-icon': {
          color: `${theme.palette.apes.purplePleasure.main} !important`
        }
      }),
    },
    {
      props: { severity: 'warning' },
      style: ({ theme }: { theme: Theme }) => ({
        '& .MuiAlert-icon': {
          color: `${theme.palette.apes.creamyCoral.main} !important`
        }
      }),
    },
  ],
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      minWidth: '400px',
      maxWidth: '400px',
      height: '68px',
      paddingLeft: 22,
      [theme.breakpoints.down('md')]: {
        height: '52px',
        width: '100%',
        paddingLeft: 17,
      },

      background: '#FFFFFF',
      /* kingly-cloud */
      border: '2px solid #DFDFDF',
      boxSizing: 'border-box',
      /* drop-shadow-sm */
      boxShadow: '0px 12px 16px rgba(0, 0, 0, 0.04)',
      borderRadius: '12px',

      alignItems: 'center',

      // fontFamily: 'Aktiv Grotesk Corp';
      fontFamily: 'aktiv-grotesk, sans-serif',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '15px',
      lineHeight: '130%',

      /* or 19px */

      '&:hover': {
        '& .MuiSvgIcon-root': {
          color: theme.palette.apes.purplePleasure.main
        }
      },

      '& .MuiIconButton-root': {
        border: 'none',
        '&:focus': {
          border: 'none',
          boxShadow: 'none'
        }
      }
    }),
    message: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.apes.offBlack,
      padding: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      '-webkit-line-clamp': '2',
      '-webkit-box-orient': 'vertical',
    }),
    icon: {
      marginRight: 17
    }
  }
}

export default MuiAlert