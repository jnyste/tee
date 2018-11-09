import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
    menubar: {
        marginLeft: 240
    }
});

class MenuBar extends React.Component {
  
  constructor(props) {
      super(props);
  }

  render () {
    return (
        <AppBar position="fixed">
            <Toolbar color="inherit">
                <IconButton color="inherit" aria-label="Menu">
                    <MenuIcon />    
                </IconButton>
                <Typography variant="h6" color="inherit" className={this.props.classes.menubar}>
                    Tasks 
                </Typography>
            </Toolbar>
        </AppBar>
    );
  }
}

export default withStyles(styles)(MenuBar);