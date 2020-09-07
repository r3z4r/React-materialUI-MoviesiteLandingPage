import React from 'react'
import { Tabs, Tab, Typography,makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  typos: {
    [theme.breakpoints.down('xs')]: {
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
      <Typography className = {classes.typos} variant='h4'>CELEBRITIES </Typography>
      <Typography className = {classes.typos} style={{backgroundColor: 'red'  }}>FANZONE</Typography>
      <span style={{ flexGrow: 1 }} />
      <Tabs
        aria-label='simple tabs example'
        value={value}
        onChange={handleChange}
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
