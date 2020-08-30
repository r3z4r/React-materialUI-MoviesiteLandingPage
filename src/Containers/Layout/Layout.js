import React from 'react';
import Grid from '@material-ui/core/Grid'
import Header from '../Header/Header'

const Layout = (props) => {
  return (
    <Grid container direction='coloumn' xs={12} >
      <Grid xs={12} item>
        <Header/>
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2}></Grid>
        <Grid item xs={12} sm={8}>
          {props.children}
        </Grid>
        <Grid item xs={0} sm={2}></Grid>
      </Grid>
    </Grid>
  );
}

export default Layout;