import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import ThemeProvider from '../../../components/ThemeProvider';
import { TextAlignCenter, TextAlignJustify, TextAlignLeft, TextAlignRight } from 'phosphor-react';

export default {
  title: 'Others/inputs/ToggleButtonGroup',
  component: ToggleButtonGroup,

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