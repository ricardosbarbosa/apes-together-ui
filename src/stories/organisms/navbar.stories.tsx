import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeProvider from '../../components/ThemeProvider/ThemeProvider';
import { AppBar, Tab } from '@mui/material';
import NavBar from '../../components/NavBar';
import React, { useMemo } from 'react';
import { TabList } from '@mui/lab';

export default {
  title: 'Organisms/NavBar',
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
  const [value, setValue] = React.useState('/dashboard');

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const menus = useMemo(
    () => [
      {
        label: 'Storybook',
        href: '/iframe.html',
      },
      {
        label: 'Dashboard',
        href: '/dashboard',
      },
      {
        label: "Lists You've Joined",
        href: '/joined-list',
      },
    ],
    []
  );

  return (
    <NavBar value={value}>
      <TabList onChange={handleChange} sx={{ height: '100%' }}>
        {menus.map((menu) => (
          <Tab disableRipple key={menu.label} label={menu.label} value={menu.href} />
        ))}
      </TabList>
    </NavBar>
  );
};
