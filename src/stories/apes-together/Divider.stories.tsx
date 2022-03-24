import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from '@mui/material';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';



export default {
  title: 'Components/Divider',
  component: Divider,

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
} as ComponentMeta<typeof Divider>;


const Template: ComponentStory<typeof Divider> = () => <Divider />;
Template.args = {}

export const Thin = Template.bind({});
