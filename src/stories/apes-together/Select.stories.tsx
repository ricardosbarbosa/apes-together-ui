import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';
import { MenuItem, Select, Stack } from '@mui/material';
import { Heartbeat } from 'phosphor-react';


export default {
  title: 'Components/Select',
  component: Select,

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


export const Template: ComponentStory<typeof Select> = () => (
  <Stack direction='column' spacing={2} alignItems='flex-start'>
    <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      label="disabled"
      onChange={console.log}
      value={10}
      disabled
      IconComponent={Heartbeat}
    >
      <MenuItem value={10}>Ten disabled</MenuItem>
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
