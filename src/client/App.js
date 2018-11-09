import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ListItem from './ListItem.js';
import MenuBar from './MenuBar.js';
import CategoryDrawer from './CategoryDrawer.js';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    }
}});

function App(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <MenuBar/>
      <CategoryDrawer />
      <div className={classes.layout}>
        <Grid container direction="column" alignItems="stretch" spacing={16}>
            <ListItem text="Ping www.google.com"/>
            <ListItem text="Ping www.google.com again"/>
            <ListItem text="Do something else cool"/>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default withStyles(styles)(App);