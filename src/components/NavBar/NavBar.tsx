import { TabContext, TabList } from '@mui/lab'
import { AppBar, Toolbar, Container, Box, Tab } from '@mui/material'
import React, { useEffect } from 'react'
import OsirisLogo from '../OsirisLogo/OsirisLogo'

export type NavBarProps = {
  menus: { label: string, href: string }[]
  initialHref: string
  onChange: (href: string) => void
}

export default function NavBar(props: NavBarProps) {
  const { menus, initialHref, onChange } = props

  const [value, setValue] = React.useState(initialHref);

  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    onChange(newValue)
  };

  useEffect(() => {
    const menu = menus.find(m => m.href === initialHref)
    if (menu) {
      setValue(menu.href)
    }
  }, [initialHref])

  return (
    <TabContext value={value}>
      <AppBar position="fixed" color='transparent' elevation={0}>
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
                  <Tab disableRipple key={menu.label} label={menu.label} value={menu.href} />
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
