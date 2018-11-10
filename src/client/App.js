import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import BuildIcon from '@material-ui/icons/Build';
import MyListItem from './MyListItem.js'
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

function App(props) {
  const { classes } = props;
  const listOfTasks = {
    "title": "Sample IP Troubleshooter",
    "type": "checklist",
    "id": "sipt-1",
    "category": "Networking",
    "author": "jjas <julius.salonen@visma.com>",
    "steps": [
        {"title": "ping google",
            "type": "step-task",
            "description": "this shit pings google",
            "shell": "/api/shellPing/www.google.com",
           "interactive": true},
         
         {"title": "ping fake website",
          "type": "manual-task",
          "description": "yeah do this thing",
          "shell": "/api/shellPing/www.iajsdiaisdasfhasuf.com",
          "interactive": false
         }
    ]
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Checklists
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {['Category 1', 'Category 2', 'Category 3', 'Category 4'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon><BuildIcon/></ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container direction="column" alignItems="stretch" spacing={16}>
             {listOfTasks.steps.map((task, index) => {return <MyListItem text={task.title} action={task.shell}/> })}
        </Grid>
      </main>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
