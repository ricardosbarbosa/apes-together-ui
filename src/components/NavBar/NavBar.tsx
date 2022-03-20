import { TabContext } from '@mui/lab'
import { AppBar, Toolbar, Container, Box } from '@mui/material'
import React from 'react'
import OsirisLogo from '../OsirisLogo/OsirisLogo'

export type NavBarProps = {
  value: string,
  rightSpot?: React.ReactNode
}

export default function NavBar(props: React.PropsWithChildren<NavBarProps>) {
  const { value, rightSpot, children } = props

  return (
    <TabContext value={value}>
      <AppBar position="fixed" elevation={0} style={{ backgroundColor: 'white' }}>
        <Toolbar sx={{ height: '100px', display: 'flex' }}>
          <Box sx={{ position: 'absolute', left: '40px' }}>
            <OsirisLogo />
          </Box>
          <Container sx={{
            height: '100px',
            '.MuiTab-root': {
              height: '100px',
              color: '#7E4A9B !important',
              fontWeight: 'normal'
            },
            '.MuiTabs-indicator': {
              backgroundColor: '#7E4A9B !important',
            }
          }}>
            {children}
          </Container>
          <Box sx={{ position: 'absolute', right: '40px' }}>
            {rightSpot}
          </Box>
        </Toolbar>
        <Box sx={{
          borderBottom: '2px solid #F2F2F2',
          margin: '-2px'
        }} />
      </AppBar>
    </TabContext>
  )
}