import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, ButtonGroup, Stack } from '@mui/material';
import ApesTogetherThemeProvider from '../../../components/ThemeProvider';



export default {
  title: 'Others/inputs/ButtonGroup',
  component: ButtonGroup,

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
} as ComponentMeta<typeof ButtonGroup>;


export const Template: ComponentStory<typeof ButtonGroup> = () => (
  <Stack direction='column' spacing={2} alignItems='center'>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup variant="text" aria-label="text button group">
      <Button>One</Button>
      <Button>Two</Button>
      <Button>Three</Button>
    </ButtonGroup>
  </Stack>

);
