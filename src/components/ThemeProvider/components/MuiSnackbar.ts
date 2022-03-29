import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material"

declare module '@mui/material/Snackbar' {
  interface SnackbarPropsVariantOverrides {
    
  }
}

const MuiSnackbar: {
  defaultProps?: ComponentsProps['MuiSnackbar'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiSnackbar'];
  variants?: ComponentsVariants['MuiSnackbar'];
} = {
  styleOverrides: {
    root: () => ({
        margin: "0 !important"
    })
  }
}
  
export default MuiSnackbar