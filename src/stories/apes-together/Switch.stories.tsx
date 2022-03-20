import { ComponentStory, ComponentMeta } from '@storybook/react';
import ApesTogetherThemeProvider from '../../components/ThemeProvider';
import Switch from '../../components/Switch';


export default {
  title: 'Components/Switch',
  component: Switch,

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
} as ComponentMeta<typeof Switch>;


export const Template: ComponentStory<typeof Switch> = () => <Switch />;
