import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import ListItem from './ListItem.js';
import MenuBar from './MenuBar.js';
import CategoryDrawer from './CategoryDrawer.js';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  layout: {
    display: "flex" /*
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    } */
},
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3
    }});

function App(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
      <CategoryDrawer />
      <MenuBar/>
        {/* <Grid container direction="column" alignItems="stretch" spacing={16}>
            <ListItem text="Ping www.google.com"/>
            <ListItem text="Ping www.google.com again"/>
            <ListItem text="Do something else cool"/>
        </Grid> */}
      </div>
      <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
    </React.Fragment>
  );
}

export default withStyles(styles)(App);