import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge, Stack } from '@mui/material';
import ThemeProvider from '../../../components/ThemeProvider';
import { Envelope } from 'phosphor-react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Others/display/Badge',
  component: Badge,
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
} as ComponentMeta<typeof Badge>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
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