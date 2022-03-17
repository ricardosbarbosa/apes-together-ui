import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box, Slider, Stack } from '@mui/material';
import ThemeProvider from '../../../components/ThemeProvider';
import { SpeakerHigh, SpeakerLow } from 'phosphor-react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Others/inputs/Slider',
  component: Slider,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
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
} as ComponentMeta<typeof Slider>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Slider> = () => {
  const [value, setValue] = React.useState<number>(30);

  const handleChange = (_: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <SpeakerLow />
        <Slider aria-label="Volume" value={value} onChange={handleChange} />
        <SpeakerHigh />
      </Stack>
      <Slider disabled defaultValue={30} aria-label="Disabled slider" />
    </Box>
  );
}
