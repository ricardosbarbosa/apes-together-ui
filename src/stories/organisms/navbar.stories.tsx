import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ThemeProvider from '../../components/ThemeProvider';
import { AppBar, Toolbar, Container } from '@mui/material';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/AppBar',
  component: AppBar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AppBar>;


export const Apes: ComponentStory<typeof AppBar> = () => (
  <>
    <AppBar position="fixed" color='transparent' elevation={0} style={{ borderBottom: "2px solid #F2F2F2" }}>
      <Toolbar>
        ok
        <Container>


          ok


        </Container>
      </Toolbar>
    </AppBar>
  </>
)
