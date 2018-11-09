import React, { Component } from 'react';
import './app.css';
import ListItem from './ListItem.js';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';

class App extends Component {

  state = { username: null };
  const { classes } = this.props;

  componentDidMount() {
    /* fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username })); */
  }

  styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        }
    }
  });

  render() {
    const { username } = this.state;
    return (
        <React.Fragment>
        <CssBaseline/>
        <div className={classes.layout}>
        </div>  
        </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);