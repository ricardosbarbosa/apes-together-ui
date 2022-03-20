import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from '@mui/material';
import ApesTogetherThemeProvider from '../../components/ThemeProvider';



export default {
  title: 'Components/Divider',
  component: Divider,

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
} as ComponentMeta<typeof Divider>;


const Template: ComponentStory<typeof Divider> = () => <Divider />;
Template.args = {}

export const Thin = Template.bind({});
