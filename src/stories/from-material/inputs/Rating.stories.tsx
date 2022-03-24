import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Rating, Box } from '@mui/material';
import ThemeProvider from '../../../components/ThemeProvider/ThemeProvider';




export default {
  title: 'Others/inputs/Rating',
  component: Rating,

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
} as ComponentMeta<typeof Rating>;

const labels: { [index: string]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


export const Template: ComponentStory<typeof Rating> = () => {
  const [value, setValue] = React.useState<number | null>(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        // name="hover-feedback"
        value={value}
        max={5}
        // precision={0.5}
        onChange={(_, newValue) => {
          console.log({ newValue })
          setValue(newValue);
        }}
        onChangeActive={(_, newHover) => {
          console.log({ newHover })
          // setHover(newHover);
          setHover(newHover);
        }}
      // icon={<span>ok</span>}
      // emptyIcon={<span>ok</span>}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>
          {labels[hover !== -1 ? hover : value]}
        </Box>
      )}
    </Box>
  )
};
