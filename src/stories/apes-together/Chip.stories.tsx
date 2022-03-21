import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chip, Stack } from '@mui/material';
import { CheckCircle, Prohibit } from 'phosphor-react';
import ThemeProvider from '../../components/ThemeProvider';



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


export const Apes: ComponentStory<typeof Chip> = () => (
  <Stack direction="column" spacing={1} alignItems="start">
    <Chip icon={<CheckCircle fontSize={20} />} label="Open" color="success" size="small" />
    <Chip icon={<Prohibit fontSize={20} />} label="Closed" color="error" size="small" />
  </Stack>
)

