import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField, Stack } from '@mui/material';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';

export default {
  title: 'Components/TextAreaField',
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

export const TextAreaField: ComponentStory<typeof TextField> = () => {
  return (
    <Stack direction={'column'} spacing={5} alignItems="flex-start">
      <TextField multiline rows={5} defaultValue="Textarea" />
      <TextField multiline rows={5} placeholder='Textarea' />
      <TextField multiline rows={5} defaultValue="Textarea" />
      <TextField multiline rows={5} defaultValue="Textarea" />
      <TextField multiline rows={5} defaultValue="Textarea" disabled />
      <TextField multiline rows={5} defaultValue="Textarea" error />
      <TextField multiline rows={5} defaultValue="Textarea" error />
    </Stack>
  )
}