import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import FirstToolbar from '../FirstToolbar/FirstToolbar'
import MenuBar from '../Menubar/Menubar'

export default function Header (props) {
  return (
    <AppBar position='static'>
      <FirstToolbar handleDrawerToggle={props.handleDrawerToggle} />
      <Toolbar>
        <MenuBar />
      </Toolbar>
    </AppBar>
  )
}
