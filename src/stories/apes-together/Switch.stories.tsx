import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeProvider from '../../components/ThemeProvider';
import Switch from '../../components/Switch';


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


export const Template: ComponentStory<typeof Switch> = () => <Switch />;
