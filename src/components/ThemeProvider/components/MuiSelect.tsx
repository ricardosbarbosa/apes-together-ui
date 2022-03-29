import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material"
import { CaretDown } from "phosphor-react";

const MuiSelect: {
  defaultProps?: ComponentsProps['MuiSelect'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiSelect'];
  variants?: ComponentsVariants['MuiSelect'];
} = {
  defaultProps: {
    IconComponent: (props) => {
      console.log({ props })
      return (
        <CaretDown size={20} weight="light" className={props.className} />
      )
    }
  },
  styleOverrides: {

    select: ({ theme }: { theme: Theme }) => ({
      width: '100%',
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
      '&:hover:not(.Mui-disabled)': {
        boxSizing: 'border-box',
        border: `2px solid ${theme.palette.apes.purplePleasure.main}`,
      },
    }),
    icon: ({ theme }: { theme: Theme }) => ({
      color: theme.palette.apes.palladium,
      right: '12px',
      '.Mui-disabled': {
        opacity: 0.6,
        border: 'none'
      }
    }),
    // @ts-ignore
    root: ({ theme }: { theme: Theme }) => ({
      background: theme.palette.apes.white,
      border: `2px solid ${theme.palette.apes.white}`,
      color: theme.palette.apes.offBlack,
      '&:hover': {
        boxSizing: 'border-box',
        border: `2px solid ${theme.palette.apes.white} !important`,
      },
      '& .MuiSelect-icon .Mui-disabled': {
        opacity: 0.6,
        border: 'none'
      },
      "&.Mui-disabled": {
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
}
export default MuiSelect