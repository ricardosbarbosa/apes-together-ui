import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeProvider from '../../components/ThemeProvider';
import { MenuItem, Select, Stack } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Select> = () => (
  <Stack direction='column' spacing={2} alignItems='flex-start'>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Age"
      onChange={console.log}
      value={10}
      fullWidth
      disabled
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem disabled value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Age"
      onChange={console.log}
      value={10}
      fullWidth
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem disabled value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="Age"
      onChange={console.log}
      value={10}
    >
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem disabled value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  </Stack>
)
