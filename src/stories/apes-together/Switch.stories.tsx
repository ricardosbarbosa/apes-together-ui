import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';
import Switch from '../../components/Switch';
import { Stack } from '@mui/material';

export default {
  title: 'Components/Switch',
  component: Switch,

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
} as ComponentMeta<typeof Switch>;


export const Switches: ComponentStory<typeof Switch> = () => (
  <Stack direction={'row'} spacing='0' alignItems="flex-start">
    <Stack direction={'column'} spacing='0' alignItems="flex-start" style={{ marginRight: 80 }}>

      <Switch style={{ margin: 0 }} />
      <Switch style={{ marginTop: 60 }} />
      <Switch style={{
        marginTop: 60,
        boxShadow: '0px 0px 0px 4px rgba(223, 223, 223, 0.32)',
        borderRadius: '20px'
      }} />
      <Switch disabled style={{ marginTop: 60 }} />

    </Stack>
    <Stack direction={'column'} spacing='0' alignItems="flex-start" >

      <Switch checked style={{ margin: 0 }} />
      <Switch checked style={{ marginTop: 60 }} />
      <Switch checked style={{
        marginTop: 60,
        boxShadow: '0px 0px 0px 4px rgba(120, 203, 143, 0.24)',
        borderRadius: '16px'
      }} />
      <Switch checked disabled style={{ marginTop: 60 }} />

    </Stack>
  </Stack>
);
