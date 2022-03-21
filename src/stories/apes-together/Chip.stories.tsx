import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chip, Stack, Avatar } from '@mui/material';
import { Check, CheckCircle, FaceMask, Prohibit, TrashSimple } from 'phosphor-react';
import ThemeProvider from '../../components/ThemeProvider';



export default {
  title: 'Components/Chip',
  component: Chip,

  argTypes: {},
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as ComponentMeta<typeof Chip>;


export const Apes: ComponentStory<typeof Chip> = () => (
  <Stack direction="column" spacing={1} alignItems="start">
    <Chip icon={<CheckCircle />} label="open" color="success" size="small" />
    <Chip icon={<Prohibit />} label="closed" color="secondary" size="small" />
  </Stack>
)

export const Colored: ComponentStory<typeof Chip> = () => (
  <Stack direction="column" spacing={1}>
    <Stack direction="row" spacing={1}>
      <Chip label="default" color="default" />
      <Chip label="primary" color="primary" />
      <Chip label="secondary" color="secondary" />
      <Chip label="error" color="error" />
      <Chip label="info" color="info" />
      <Chip label="success" color="success" />
      <Chip label="warning" color="warning" />
    </Stack>
    <Stack direction="row" spacing={1}>

      <Chip label="default" color="default" variant='outlined' />
      <Chip label="primary" color="primary" variant='outlined' />
      <Chip label="secondary" color="secondary" variant='outlined' />
      <Chip label="error" color="error" variant='outlined' />
      <Chip label="info" color="info" variant='outlined' />
      <Chip label="success" color="success" variant='outlined' />
      <Chip label="warning" color="warning" variant='outlined' />
    </Stack>

  </Stack>
)


export const Basic: ComponentStory<typeof Chip> = () => (
  <Stack direction="row" spacing={1}>
    <Chip label="Chip default" />
    <Chip label="Chip Outlined" variant="outlined" />
  </Stack>
)

export const Clickable: ComponentStory<typeof Chip> = () => (
  <Stack direction="row" spacing={1}>
    <Chip label="default" onClick={() => alert('Clickable')} />
    <Chip label="outlined" variant="outlined" onClick={() => alert('Clickable outlined')} />
  </Stack>
)

export const Deletable: ComponentStory<typeof Chip> = () => (
  <Stack direction="row" spacing={1}>
    <Chip label="default" onDelete={() => alert('default Deletable')} />
    <Chip label="outlined" variant="outlined" onDelete={() => alert('outlined Deletable')} />
  </Stack>
)

export const ClickableLink: ComponentStory<typeof Chip> = () => (
  <Stack direction="row" spacing={1}>
    <Chip label="Clickable Link" component="a" href="#basic-chip" clickable />
    <Chip label="Clickable Link" component="a" href="#basic-chip" variant="outlined" clickable />
  </Stack>
)

export const CustomDeleteIcon: ComponentStory<typeof Chip> = () => (
  <Stack direction="row" spacing={1}>
    <Chip
      label="Custom delete icon"
      onClick={() => alert('hi')}
      onDelete={() => alert('hi')}
      deleteIcon={<Check />}
    />
    <Chip
      label="Custom delete icon"
      onClick={() => alert('hi')}
      onDelete={() => alert('hi')}
      deleteIcon={<TrashSimple />}
      variant="outlined"
    />
  </Stack>
)

export const AvatarChip: ComponentStory<typeof Chip> = () => (
  <Stack direction="row" spacing={1}>
    <Chip avatar={<Avatar>M</Avatar>} label="Avatar" />
    <Chip
      avatar={<Avatar alt="Natacha" src="https://randomuser.me/api/portraits/men/32.jpg" />}
      label="Avatar"
      variant="outlined"
    />
  </Stack>
)

export const Icons: ComponentStory<typeof Chip> = () => (
  <Stack direction="row" spacing={1}>
    <Chip icon={<FaceMask />} label="With Icon" />
    <Chip icon={<FaceMask />} label="With Icon" variant="outlined" />
  </Stack>
)
export const Sizes: ComponentStory<typeof Chip> = () => (
  <Stack direction="column" spacing={2} alignItems="flex-start">
    <Chip label="Small" size="small" />
    <Chip label="Small" size="small" variant="outlined" />
    <Chip label="Medium" size="medium" />
    <Chip label="Medium" size="medium" variant="outlined" />
  </Stack>
)
