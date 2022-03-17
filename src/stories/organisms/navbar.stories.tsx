import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeProvider from '../../components/ThemeProvider';
import { AppBar } from '@mui/material';
import NavBar from '../../components/NavBar/NavBar';

export default {
  title: 'Organisms/AppBar',
  component: AppBar,
  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AppBar>;

export const Apes: ComponentStory<typeof AppBar> = () => {

  return (
    <NavBar menus={[
      {
        label: 'Storybook',
        href: '/iframe.html'
      },
      {
        label: 'Dashboard',
        href: '/dashboard'
      },
      {
        label: "Lists You've Joined",
        href: '/joined-list'
      }
    ]} />
  )
}
