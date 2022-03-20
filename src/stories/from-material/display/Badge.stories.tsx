import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge, Stack } from '@mui/material';
import ApesTogetherThemeProvider from '../../../components/ThemeProvider';
import { Envelope } from 'phosphor-react';



export default {
  title: 'Others/display/Badge',
  component: Badge,

  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <ApesTogetherThemeProvider>
        <Story />
      </ApesTogetherThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Badge>;


export const Template: ComponentStory<typeof Badge> = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={4} color="secondary" >
        <Envelope size={24} />
      </Badge>
      <Badge badgeContent={4} color="success">
        <Envelope size={24} />
      </Badge>
    </Stack>
  );
}