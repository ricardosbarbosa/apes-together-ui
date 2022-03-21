import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@mui/material/Button';

import ThemeProvider from '../../components/ThemeProvider';
import { IconButton } from '@mui/material';
import { ArrowUpRight, Plus, Trash } from 'phosphor-react';

// import { Grid, Typography } from '@mui/material';
// import { Alarm, Fingerprint, PaperPlane, ShoppingCart } from 'phosphor-react';

export default {
  title: 'Components/Button',
  component: Button,

  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider >
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Button>;


const Playground: ComponentStory<typeof Button> = (args) => <Button {...args} />;
Playground.args = {
  children: 'Button',
}

export const Primary = Playground.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'primary',
};
export const DisabledPrimary = Playground.bind({});
DisabledPrimary.args = {
  children: 'Primary',
  variant: 'primary',
  color: 'primary',
  disabled: true
};
export const Secondary = Playground.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'secondary',
};
export const DisabledSecondary = Playground.bind({});
DisabledSecondary.args = {
  children: 'Secondary',
  variant: 'secondary',
  disabled: true
};
export const RightIcon = Playground.bind({});
RightIcon.args = {
  endIcon: <ArrowUpRight size={20} />,
  variant: 'secondary',
  children: 'secondary'
};
export const LeftIcon = Playground.bind({});
LeftIcon.args = {
  startIcon: <Plus size={20} />,
  variant: 'secondary',
  children: 'secondary'
};

const PlaygroundIconButton: ComponentStory<typeof Button> = (args) => <IconButton {...args} />;
PlaygroundIconButton.args = {}

export const Icon = PlaygroundIconButton.bind({});
Icon.args = {
  children: <Trash />,
};

export const DisabledIcon = PlaygroundIconButton.bind({});
DisabledIcon.args = {
  children: <Trash />,
  disabled: true
};
