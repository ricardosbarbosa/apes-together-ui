import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chip, Stack } from '@mui/material';
import { CheckCircle, Prohibit } from 'phosphor-react';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';

export default {
  title: 'Components/Chip',
  component: Chip,

  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Chip>;


export const Chips: ComponentStory<typeof Chip> = () => (
  <Stack direction={'column'} spacing='0' alignItems="flex-start">
    <Chip icon={<CheckCircle weight="fill" style={{ width: 16, aspectRatio: '16', fontWeight: '500', }} />} label="Open" color="success" size="small" />
    <Chip icon={<Prohibit style={{ width: 16, aspectRatio: '16', fontWeight: '500', }} />} label="Closed" color="error" size="small" style={{ marginTop: '4.25rem' }} />
  </Stack>
)
