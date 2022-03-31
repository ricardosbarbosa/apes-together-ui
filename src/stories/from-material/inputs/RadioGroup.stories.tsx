import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Stack } from '@mui/material';
import ThemeProvider from '../../../components/ThemeProvider/ThemeProvider';
import { pink } from '@mui/material/colors';

export default {
  title: 'Others/inputs/RadioGroup',
  component: RadioGroup,

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
} as ComponentMeta<typeof RadioGroup>;

export const Template: ComponentStory<typeof RadioGroup> = () => {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });
  return (
    <Stack direction='column' spacing={2} alignItems='center'>
      <FormControl>
        <FormLabel id='demo-radio-buttons-group-label'>Gender</FormLabel>
        <RadioGroup
          aria-labelledby='demo-radio-buttons-group-label'
          defaultValue='female'
          name='radio-buttons-group'
        >
          <FormControlLabel value='female' control={<Radio />} label='Female' />
          <FormControlLabel value='male' control={<Radio />} label='Male' />
          <FormControlLabel value='other' control={<Radio />} label='Other' />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id='demo-row-radio-buttons-group-label'>Gender</FormLabel>
        <RadioGroup
          row
          aria-labelledby='demo-row-radio-buttons-group-label'
          name='row-radio-buttons-group'
        >
          <FormControlLabel value='female' control={<Radio />} label='Female' />
          <FormControlLabel value='male' control={<Radio />} label='Male' />
          <FormControlLabel value='other' control={<Radio />} label='Other' />
          <FormControlLabel value='disabled' disabled control={<Radio />} label='other' />
        </RadioGroup>
      </FormControl>
      <Stack spacing='2' direction={'row'}>
        <Radio {...controlProps('a')} />
        <Radio {...controlProps('b')} color='secondary' />
        <Radio {...controlProps('c')} color='success' />
        <Radio {...controlProps('d')} color='default' />
        <Radio
          {...controlProps('e')}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      </Stack>
      <Stack direction={'row'} spacing='2'>
        <Radio {...controlProps('a')} size='small' />
        <Radio {...controlProps('b')} />
        <Radio
          {...controlProps('c')}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 28,
            },
          }}
        />
      </Stack>
    </Stack>
  );
};
