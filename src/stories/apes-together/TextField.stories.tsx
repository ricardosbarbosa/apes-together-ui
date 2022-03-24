import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField, Stack, InputAdornment } from '@mui/material';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';
import { Clock } from 'phosphor-react';

export default {
  title: 'Components/TextField',
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

export const Template: ComponentStory<typeof TextField> = () => {
  return (
    <Stack direction={'column'} spacing={2}>
      <TextField placeholder='Placeholder' defaultValue={"Hello world"} />
      <TextField placeholder='this is a placeholder' />
      <TextField placeholder='Placeholder' defaultValue={"hello word disabled"} disabled />
      <TextField placeholder='Placeholder' defaultValue={"Error"} error />
      <br />

      <TextField multiline rows={3} placeholder='Placeholder' defaultValue={"Hello world"} />
      <TextField multiline rows={3} placeholder='Placeholder' defaultValue={"Hello world disabled"} disabled />
      <TextField multiline rows={3} placeholder='Placeholder' />
      <TextField multiline rows={3} placeholder='Placeholder' defaultValue={"Error"} error />
      <br />

      <TextField rows={3} placeholder='Placeholder' defaultValue={"Hello world"} type='text'
        InputProps={{
          startAdornment: <InputAdornment position="start">https://</InputAdornment>,
        }}
      />
      <TextField rows={3} placeholder='Placeholder' defaultValue={"Hello world"} type='text'
        InputProps={{
          endAdornment: <InputAdornment position="end"><Clock size={20} /></InputAdornment>
        }}
      />

    </Stack>
  )
}