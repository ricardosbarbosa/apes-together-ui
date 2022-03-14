import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '@mui/material/Button';

import ThemeProvider from '../components/ThemeProvider';
import { Grid, IconButton, Typography } from '@mui/material';
import { Alarm, ArrowUpRight, Fingerprint, PaperPlane, Plus, ShoppingCart, Trash } from 'phosphor-react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story/>
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Button> = () => (
  <Grid container gap={2}>
    <Grid item xs={12}>
      <Typography variant='h5' fontWeight='bold'>Basic button</Typography>
    </Grid>
    <Grid item >
      <Button variant="text">Text</Button>
    </Grid>
    <Grid item >
      <Button variant="contained">Contained</Button>
    </Grid>
    <Grid item >
      <Button variant="outlined">Outlined</Button>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h5' fontWeight='bold'>Text button</Typography>
    </Grid>
    <Grid item >
      <Button variant='text'>Primary</Button>
    </Grid>
    <Grid item >
      <Button variant='text'disabled>Disabled</Button>
    </Grid>
    <Grid item >  
      <Button variant='text' href="#text-buttons">Link</Button>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h5' fontWeight='bold'>Contained button</Typography>
    </Grid>
    <Grid item >
      <Button variant="contained">Contained</Button>
      </Grid>
    <Grid item >
      <Button variant="contained" disabled>Disabled</Button>
      </Grid>
    <Grid item >
      <Button variant="contained" href="#contained-buttons">Link</Button>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h5' fontWeight='bold'>Outlined button</Typography>
    </Grid>
    <Grid item >
      <Button variant="outlined">Primary</Button>
      </Grid>
    <Grid item >
      <Button variant="outlined" disabled>Disabled</Button>
      </Grid>
    <Grid item >
      <Button variant="outlined" href="#outlined-buttons">Link</Button>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h5' fontWeight='bold'>Color</Typography>
    </Grid>
    
    
    <Grid item >
      <Button variant="contained" color="success">Success</Button>
      </Grid>
    <Grid item >
      <Button variant="contained" color="error">Error</Button>
    </Grid>
    
    <Grid item >
      <Button variant="outlined" color="success">Success</Button>
      </Grid>
    <Grid item >
      <Button variant="outlined" color="error">Error</Button>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h5' fontWeight='bold'>Sizes</Typography>
    </Grid>
    
    <Grid item xs={3}>
      <Button size="small">Small</Button>
    </Grid>
    <Grid item xs={3}>
      <Button size="medium">Medium</Button>
      </Grid>
    <Grid item xs={3}>
      <Button size="large">Large</Button>
      </Grid>
    <Grid item xs={3}>
      <Button variant="outlined" size="small">Small</Button>
      </Grid>
    <Grid item xs={3}>
      <Button variant="outlined" size="medium">Medium</Button>
      </Grid>
    <Grid item xs={3}>
      <Button variant="outlined" size="large">Large</Button>
      </Grid>
    <Grid item xs={3}>
      <Button variant="contained" size="small">Small</Button>
      </Grid>
    <Grid item xs={3}>
      <Button variant="contained" size="medium">Medium</Button>
      </Grid>
    <Grid item xs={3}>
      <Button variant="contained" size="large">Large</Button>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h5' fontWeight='bold'>Buttons with icons and label</Typography>
    </Grid>
    <Grid item >
      <Button variant="outlined" startIcon={<Trash />}>Delete</Button>
      </Grid>
    <Grid item >
      <Button variant="contained" endIcon={<PaperPlane />}>Send</Button>
    </Grid>
    <Grid item xs={12}>
      <Typography variant='h5' fontWeight='bold'>Icon Buttons</Typography>
    </Grid>
    <Grid item >
      <IconButton aria-label="delete" >
        <Trash />
      </IconButton>
    </Grid>
    <Grid item >
      <IconButton aria-label="delete" disabled color="primary">
        <Trash />
      </IconButton>
    </Grid>
    <Grid item >
      <IconButton aria-label="add an alarm">
        <Alarm />
      </IconButton>
    </Grid>
    <Grid item >
      <IconButton aria-label="add to shopping cart">
        <ShoppingCart />
      </IconButton>
    </Grid>
    
    <Grid item xs={12}>
      <Typography variant='h5' fontWeight='bold'>Icon Buttons Sizes</Typography>
    </Grid>
    <Grid item >
      <IconButton aria-label="delete" size="small">
        <Trash />
      </IconButton>
    </Grid>
    <Grid item >
      <IconButton aria-label="delete" size="medium" >
        <Trash />
      </IconButton>
    </Grid>
    <Grid item >
      <IconButton aria-label="delete" size="large">
        <Trash/>
      </IconButton>
    </Grid>
   
    <Grid item xs={12}>
      <Typography variant='h5' fontWeight='bold'>Icon Buttons Colors</Typography>
    </Grid>
    <Grid item >
      <IconButton aria-label="fingerprint" color="primary">
        <Fingerprint />
      </IconButton>
    </Grid>
    <Grid item >
      <IconButton aria-label="fingerprint" color="success">
        <Fingerprint />
      </IconButton>
    </Grid>
  </Grid>
)

const Playground: ComponentStory<typeof Button> = (args) => <Button {...args} />;
Playground.args = {
  children: 'Button',
}

export const Primary = Playground.bind({});
Primary.args = {
  children: 'Primary',
  variant: 'contained'
};
export const Secondary = Playground.bind({});
Secondary.args = {
  children: 'Secondary',
  variant: 'outlined',
  color: 'secondary'
};
export const RightIcon = Playground.bind({});
RightIcon.args = {
  endIcon: <ArrowUpRight size={22} />,
  variant: 'outlined',
  children: 'secondary'
};
export const LeftIcon = Playground.bind({});
LeftIcon.args = {
  startIcon: <Plus size={22} />,
  variant: 'outlined',
  children: 'secondary'
};

export const Block = Playground.bind({});
Block.args = {
  children: 'Secondary',
  variant: 'outlined',
  fullWidth: true
};

const PlaygroundIconButton: ComponentStory<typeof Button> = (args) => <IconButton {...args} />;
PlaygroundIconButton.args = {}

export const Icon = PlaygroundIconButton.bind({});
Icon.args = {
  variant: 'outlined',
  children: <Trash />,
};
