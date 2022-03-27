import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField, Stack, InputAdornment } from '@mui/material';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';
import { Clock } from 'phosphor-react';

export default {
  title: 'Components/TextFieldTrailingAddOn',
  component: TextField,

  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof TextField>;

export const TextFieldTrailingAddOn: ComponentStory<typeof TextField> = () => {
  return (
    <Stack direction={'column'} spacing={5} alignItems="flex-start">
      <TextField defaultValue={"Input"}
        InputProps={{
          endAdornment: <InputAdornment position="end"><Clock size={20} /></InputAdornment>
        }}
      />
      <TextField placeholder='Placeholder'
        InputProps={{
          endAdornment: <InputAdornment position="end"><Clock size={20} /></InputAdornment>
        }}
      />
      <TextField defaultValue={"Hover"}
        InputProps={{
          endAdornment: <InputAdornment position="end"><Clock size={20} /></InputAdornment>
        }}
      />
      <TextField defaultValue={"Focus"}
        InputProps={{
          endAdornment: <InputAdornment position="end"><Clock size={20} /></InputAdornment>
        }}
      />

    </Stack>
  )
}