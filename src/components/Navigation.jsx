import React from 'react'
import {AppBar, Toolbar, Button, Typography } from '@mui/material'

const Navigation = ({show, toggleForm}) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={ { flexGrow: 1 } }>
          Task Tracker
        </Typography>
        <Button color="inherit" onClick={ () => toggleForm() }>
          { show ? 'Hide' : 'Show' } ADD FORM
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navigation