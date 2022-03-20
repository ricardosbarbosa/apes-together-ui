import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from '@mui/material';
import ApesTogetherThemeProvider from '../../../components/ThemeProvider';

export default {
  title: 'Others/inputs/Checkbox',
  component: Checkbox,

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
} as ComponentMeta<typeof Checkbox>;


export const Template: ComponentStory<typeof Checkbox> = () => <Checkbox />;
