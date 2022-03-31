import { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from '@mui/material';

const MuiButton: {
  defaultProps?: ComponentsProps['MuiButton'];
  styleOverrides?: ComponentsOverrides<Theme>['MuiButton'];
  variants?: ComponentsVariants['MuiButton'];
} = {
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
          },
        },
        '&:focus': {
          color: theme.palette.apes.offBlack,
          background: theme.palette.apes.white,
          border: `2px solid ${theme.palette.apes.purplePleasure.main} `,
          boxSizing: 'border-box',
          boxShadow: `0px 0px 0px 4px ${theme.palette.apes.purplePleasure.light}`,
          '& .MuiButton-startIcon,.MuiButton-endIcon': {
            color: theme.palette.apes.purplePleasure.main,
          },
        },
        '&:disabled': {
          color: theme.palette.apes.offBlack,
          background: theme.palette.apes.white,
          border: `2px solid ${theme.palette.apes.kinglyCloud}`,
          opacity: 0.6,
          '& .MuiButton-startIcon,.MuiButton-endIcon': {
            color: theme.palette.apes.palladium,
          },
        },
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
      return {
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
        transition: '0.3s',
      };
    },
    sizeMedium: {
      fontSize: '13px',
      height: '52px',
    },
    sizeSmall: {
      fontSize: '13px',
      height: '44px',
    },
  },
};

export default MuiButton;
