import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Snackbar, Stack } from '@mui/material';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';
import Button from '@mui/material/Button';

import MuiAlert from '@mui/material/Alert';
import * as React from 'react';


export default {
  title: 'Components/Snackbar',
  component: Snackbar,

  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Snackbar>;


export const Snackbars: ComponentStory<typeof Snackbar> = () => {
  const [severity, setSeverity] = React.useState<"warning" | "info" | "success" | undefined>();
  const [open, setOpen] = React.useState(false);

  const handleClick = (type: "warning" | "info" | "success" | undefined) => () => {
    setSeverity(type);
    setOpen(true)
  };

  const handleClose = (_?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} direction="row" sx={{ width: '100%' }}>
      <Button variant="secondary" onClick={handleClick("success")}>
        Open SUCCESS snackbar
      </Button>
      <Button variant="secondary" onClick={handleClick("warning")}>
        Open WARNING snackbar
      </Button>
      <Button variant="secondary" onClick={handleClick("info")}>
        Open INFO snackbar
      </Button>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          horizontal: 'center',
          vertical: 'bottom'
        }}
      >
        <MuiAlert onClose={handleClose} severity={severity} sx={{ width: '100%' }} title="This is a message! This is a message!This is a message! This is a message! This is a message! This is a message!">
          This is a message! This is a message!This is a message! This is a message! This is a message! This is a message!
        </MuiAlert>
      </Snackbar>
    </Stack >
  )
}
