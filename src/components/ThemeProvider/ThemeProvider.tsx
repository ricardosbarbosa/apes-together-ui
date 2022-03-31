import React from "react";
import { CssBaseline } from '@mui/material';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';

import typography from './typography';
import shape from './shape';
import palette from './palette';
import components from './components/components';
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
    };
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
    };
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    warning: true;
    outlined: false;
    contained: false;
    text: false;
  }
}

// const theme = createTheme(deepmerge(shape, direction, pallete, typography));
const theme = createTheme({
  shape,
  direction: 'rtl',
  palette,
  typography,
  components,
});

type Props = Record<string, unknown>;

export default function ThemeProvider({ children }: React.PropsWithChildren<Props>) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}
