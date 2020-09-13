import React from 'react'
import { Tabs, Tab, Typography,makeStyles  } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  typos: {
    [theme.breakpoints.down('sm')]: {
      display:"none"
    }
  }}))

export default function MenuBar () {
  const classes = useStyles()

  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <>
      <Typography className = {classes.typos} variant='h2'>FAN</Typography>
      <Typography className = {classes.typos}  variant='h2' color= 'secondary'>ZONE</Typography>
      <span style={{ flexGrow: 1 }} />
      <Tabs
          aria-label="scrollable auto tabs example"
          value={value}
        onChange={handleChange}
        variant="scrollable"
          scrollButtons="auto"
          
			>
        <Tab label='Home'  />
        <Tab label='Celeberities' />
        <Tab label='Gallery' />
        <Tab label='News' />
        <Tab label='Contacts' />
      </Tabs>
    </>
  )
}
