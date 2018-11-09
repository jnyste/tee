import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    
});

class MenuBar extends React.Component {
  
  constructor(props) {
      super(props);
  }

  render () {
    return (
        <AppBar position="static">
            <Toolbar color="inherit">
                <Typography variant="h6" color="inherit" className={classes.grow}>
                    Tasks
                </Typography>
            </Toolbar>
        </AppBar>
    );
  }
}

export default withStyles(styles)(MenuBar);