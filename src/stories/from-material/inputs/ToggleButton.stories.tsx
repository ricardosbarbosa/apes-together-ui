import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import ThemeProvider from '../../../components/ThemeProvider';
import { TextAlignCenter, TextAlignJustify, TextAlignLeft, TextAlignRight } from 'phosphor-react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Others/inputs/ToggleButtonGroup',
  component: ToggleButtonGroup,
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
} as ComponentMeta<typeof ToggleButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof ToggleButtonGroup> = () => {
  const [alignment, setAlignment] = React.useState<string | null>('left');

  const handleAlignment = (
    _: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
    >
      <ToggleButton value="left" aria-label="left aligned">
        <TextAlignLeft />
      </ToggleButton>
      <ToggleButton value="center" aria-label="centered">
        <TextAlignCenter />
      </ToggleButton>
      <ToggleButton value="right" aria-label="right aligned">
        <TextAlignRight />
      </ToggleButton>
      <ToggleButton value="justify" aria-label="justified" disabled>
        <TextAlignJustify />
      </ToggleButton>
    </ToggleButtonGroup>
  );
}