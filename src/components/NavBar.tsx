import { TabContext } from '@mui/lab'
import { AppBar, Toolbar, Container, Box } from '@mui/material'
import React from 'react'
import OsirisLogo from './OsirisLogo'

export type NavBarProps = React.PropsWithChildren<{
  value: string,
  rightSpot?: React.ReactNode
}>

export default function NavBar(props: NavBarProps) {
  const { value, rightSpot, children } = props

  const AppBarStyle = { backgroundColor: 'white' }

  const LogoSx = { position: 'absolute', left: '40px' }

  const ContainerSx = {
    height: '102px',
    '.MuiTab-root': {
      height: '102px',
      color: '#303030 !important',
      textTransform: 'none',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '15px',
      lineHeight: '130%',
    },
    '.Mui-selected': {
      color: '#7E4A9B !important',
    },
    '.MuiTabs-indicator': {
      backgroundColor: '#7E4A9B !important',
    }
  }

  const RightSpotSx = { position: 'absolute', right: '40px' }
  const BorderSx = {
    borderBottom: '2px solid #F2F2F2',
    margin: '-2px'
  }
  return (
    <TabContext value={value}>
      <AppBar position="fixed" elevation={0} style={AppBarStyle}>
        <Toolbar sx={{ height: '102px', display: 'flex' }}>
          <Box sx={LogoSx}>
            <OsirisLogo />
          </Box>
          <Container sx={ContainerSx}>
            {children}
          </Container>
          <Box sx={RightSpotSx}>
            {rightSpot}
          </Box>
        </Toolbar>
        <Box sx={BorderSx} />
      </AppBar>
    </TabContext>
  )
}