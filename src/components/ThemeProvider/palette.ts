import { PaletteOptions } from '@mui/material';

const palette: PaletteOptions = {
  apes: {
    purplePleasure: {
      main: '#7E4A9B',
      light: 'rgba(126, 74, 155, 0.12)',
      dark: '#612B80',
    },
    creamyCoral: {
      main: '#E2778A',
      light: 'rgba(226, 119, 138, 0.16)',
      dark: '#CB6678',
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
    contrastText: '#ffffff',
  },
  error: {
    main: '#E2778A',
    contrastText: '#ffffff',
  },
};

export default palette;
