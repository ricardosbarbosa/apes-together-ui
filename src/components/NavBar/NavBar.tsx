import { TabContext, TabList } from '@mui/lab'
import { AppBar, Toolbar, Container, Box, Tab } from '@mui/material'
import React from 'react'
import OsirisLogo from '../OsirisLogo/OsirisLogo'

type NavBarProps = {
  menus: { label: string, href: string }[]
}

export default function NavBar(props: NavBarProps) {
  const { menus } = props

  console.log(window.location.pathname)

  const [value, setValue] = React.useState(window.location.pathname);



  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value}>
      <AppBar position="fixed" color='transparent' elevation={0} style={{}}>
        <Toolbar style={{ height: '100px' }}>
          <OsirisLogo />
          <Container sx={{ height: '100%' }}>
            <Box sx={{ height: '100%', width: '100%', typography: 'body1' }}>

              <TabList onChange={handleChange} aria-label="lab API tabs example" sx={{
                height: '100%',
                '.MuiTab-root': {
                  height: '100px',
                }
              }}>
                {menus.map(menu => (
                  <Tab disableRipple key={menu.label} label={menu.label} value={menu.href} href={menu.href} />
                ))}
              </TabList>
            </Box>
          </Container>
        </Toolbar>
        <Box sx={{ borderBottom: '2px solid #F2F2F2', margin: '-2px' }} />
      </AppBar>
    </TabContext>
  )
}
