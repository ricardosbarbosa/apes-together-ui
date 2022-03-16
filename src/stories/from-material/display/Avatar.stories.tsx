import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Avatar, AvatarGroup, Badge, Stack, styled } from '@mui/material';
import ThemeProvider from '../../../components/ThemeProvider';
import { deepOrange, deepPurple, green, pink } from '@mui/material/colors';
import { File, Folder, HeartBreak } from 'phosphor-react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Others/display/Avatar',
  component: Avatar,
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
} as ComponentMeta<typeof Avatar>;

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof Avatar> = (args) => {
  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Remy Sharp" src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg" />
        <Avatar alt="Travis Howard" src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg" />
        <Avatar alt="Cindy Baker" src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar>H</Avatar>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Remy Sharp"
          src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg"
          sx={{ width: 24, height: 24 }}
        />
        <Avatar alt="Remy Sharp" src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg" />
        <Avatar
          alt="Remy Sharp"
          src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar>
          <Folder />
        </Avatar>
        <Avatar sx={{ bgcolor: pink[500] }}>
          <File />
        </Avatar>
        <Avatar sx={{ bgcolor: green[500] }}>
          <HeartBreak />
        </Avatar>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Avatar sx={{ bgcolor: deepOrange[500] }} variant="square">
          N
        </Avatar>
        <Avatar sx={{ bgcolor: green[500] }} variant="rounded">
          <File />
        </Avatar>

      </Stack>
      <Stack direction="row" spacing={2}>

        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg" />
          <Avatar alt="Travis Howard" src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg" />
          <Avatar alt="Cindy Baker" src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg" />
          <Avatar alt="Agnes Walker" src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg" />
          <Avatar alt="Trevor Henderson" src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg" />
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={2}>

        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <SmallAvatar alt="Remy Sharp" src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg" />
          }
        >
          <Avatar alt="Travis Howard" src="https://images.generated.photos/c1uijKiqWZaZN1fiIztVZhTpSYaHaCZpituT3aOvwNo/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MjM2MjQwLmpwZw.jpg" />
        </Badge>
      </Stack>
    </Stack>
  );
}
