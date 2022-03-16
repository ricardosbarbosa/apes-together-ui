import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField, Stack } from '@mui/material';
import ThemeProvider from '../../components/ThemeProvider';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/TextField',
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof TextField> = () => (
  <Stack direction={'column'} spacing={2}>
    <TextField placeholder='Placeholder' defaultValue={"Hello world"} />
    <TextField placeholder='Placeholder' defaultValue={"Hello world"} disabled />
    <TextField placeholder='Placeholder' />
    <TextField placeholder='Placeholder' defaultValue={"Error"} error />
    <br />

    <TextField multiline rows={3} placeholder='Placeholder' defaultValue={"Hello world"} />
    <TextField multiline rows={3} placeholder='Placeholder' defaultValue={"Hello world"} disabled />
    <TextField multiline rows={3} placeholder='Placeholder' />
    <TextField multiline rows={3} placeholder='Placeholder' defaultValue={"Error"} error />

  </Stack>
)
