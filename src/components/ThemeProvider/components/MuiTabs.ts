import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material"

export const MuiTabs: {
  defaultProps?: ComponentsProps['MuiTabs'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTabs'];
  variants?: ComponentsVariants['MuiTabs'];
} = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: {
      boxShadow: `inset 0px -2px 0px 0px #f2f2f2`,
    },
    indicator: {
      
    }
  }
}

export const MuiTab: {
  defaultProps?: ComponentsProps['MuiTab'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiTab'];
  variants?: ComponentsVariants['MuiTab'];
} = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
    disableFocusRipple: true
  },
  styleOverrides: {
    root: ({ theme }: { theme: Theme }) => ({
      textTransform: 'none',
      fontFamily: 'aktiv-grotesk, sans-serif !important',
      fontStyle: 'normal',
      letterSpacing: '0.005rem',
      fontWeight: 400,
      fontSize: '15px',
      // lineHeight: '130%',
      color: theme.palette.apes.offBlack,
      marginRight: '24px',
      padding: '16.5px 0',
      minWidth: 0,
    })
  }
}