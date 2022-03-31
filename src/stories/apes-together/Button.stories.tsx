import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@mui/material/Button';

import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { ArrowUpRight, CircleNotch, Plus, Trash } from 'phosphor-react';
import { useTheme } from '@mui/material/styles';

export default {
  title: 'Components/Button',
  component: Button,

  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Playground: ComponentStory<typeof Button> = (args) => <Button {...args} />;
Playground.args = {
  children: 'Button',
};

export const Primary: ComponentStory<typeof Button> = (args) => (
  <Stack direction={'column'} spacing={5}>
    <Button {...args} variant='primary'  >Primary</Button>
    <Button {...args} variant='primary'  >Hover</Button>
    <Button {...args} variant='primary'  >Focus</Button>
    <Button {...args} variant='primary' disabled >Disabled</Button>
  </Stack>
);
export const Secondary: ComponentStory<typeof Button> = (args) => (
  <Stack direction={'column'} spacing={5}>
    <Button {...args} variant='secondary'  >Secondary</Button>
    <Button {...args} variant='secondary'  >Hover</Button>
    <Button {...args} variant='secondary'  >Focus</Button>
    <Button {...args} variant='secondary' disabled >Secondary</Button>
  </Stack>
);

export const Warning: ComponentStory<typeof Button> = (args) => (
  <Stack direction={'column'} spacing={5}>
    <Button {...args} variant='warning'  >Warning</Button>
    <Button {...args} variant='warning'  >Warning</Button>
    <Button {...args} variant='warning'  >Warning</Button>
    <Button {...args} variant='warning' disabled >Warning</Button>
  </Stack>
);
export const ButtonSecondaryLeadingIcon: ComponentStory<typeof Button> = (args) => (
  <Stack direction={'column'} spacing={5}>
    <Button {...args} variant='secondary' startIcon={<Plus size={20} />} >Secondary</Button>
    <Button {...args} variant='secondary' startIcon={<Plus size={20} />} >Hover</Button>
    <Button {...args} variant='secondary' startIcon={<Plus size={20} />} >Focus</Button>
    <Button
      {...args}
      variant='secondary'
      startIcon={<Plus size={20} />}
      disabled
    >
      Disabled
    </Button>
  </Stack>
);

export const ButtonSecondaryTrailingIcon: ComponentStory<typeof Button> = (args) => (
  <Stack direction={'column'} spacing={5}>
    <Button
      {...args}
      variant='secondary'
      endIcon={<ArrowUpRight size={20} />}
    >
      Secondary
    </Button>
    <Button {...args} variant='secondary' endIcon={<ArrowUpRight size={20} />} >Hover</Button>
    <Button {...args} variant='secondary' endIcon={<ArrowUpRight size={20} />} >Focus</Button>
    <Button
      {...args}
      variant='secondary'
      endIcon={<ArrowUpRight size={20} />}
      disabled
    >Disabled</Button>
  </Stack>
);

export const IconsButtons: ComponentStory<typeof IconButton> = (args) => (
  <Stack direction={'column'} spacing={5}>
    <IconButton {...args}  ><Trash size={20} /></IconButton>
    <IconButton {...args}  ><Trash size={20} /></IconButton>
    <IconButton {...args}  ><Trash size={20} /></IconButton>
    <IconButton {...args} disabled ><Trash size={20} /></IconButton>
  </Stack>
);

export const LoadingButtons: ComponentStory<typeof Button> = (args) => {
  const theme = useTheme();
  return (
    <Stack direction={'column'} spacing={5}>
      <Button
        {...args}
        variant='primary'
        disabled
        startIcon={
          <CircleNotch size={20}>
            {/* <WarningCircle size={28}  weight="fill" /> */}
            <animateTransform
              attributeName='transform'
              attributeType='XML'
              type='rotate'
              dur='1s'
              from='0 0 0'
              to='360 0 0'
              repeatCount='indefinite'
            />
          </CircleNotch>
        }
      >Primary</Button>
      <Button
        {...args}
        variant='secondary'
        disabled
        startIcon={
          <CircleNotch size={20} color={theme.palette.apes.serengetiGreen}>
            <animateTransform
              attributeName='transform'
              attributeType='XML'
              type='rotate'
              dur='1s'
              from='0 0 0'
              to='360 0 0'
              repeatCount='indefinite'
            />
          </CircleNotch>
        }
      >Secondary</Button>
    </Stack>
  );
};
