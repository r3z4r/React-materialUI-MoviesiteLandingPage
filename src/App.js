import React from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from '@material-ui/core/Grid'

function App() {
  return (
    <Grid container direction='coloumn'>
      <Grid item>
        Header
      </Grid>
      <Grid item container>
        Content
      </Grid>
    </Grid>
  );
}

export default App;
