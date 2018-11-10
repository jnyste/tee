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
import BuildIcon from '@material-ui/icons/Build';
import MyListItem from './MyListItem.js'
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import { withTheme } from '@material-ui/core/styles';


const styles = theme => ({
    palette: {
        type: "dark",
        primary: {
          main: "#43563f"
        },
        secondary: {
          main: "#97c16b"
        },
        background: {
          default: "#101010"
        }
    },
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
      backgroundColor: theme.palette.background,
      padding: theme.spacing.unit * 3,
    },
});

const drawerWidth = 240;

class App extends React.Component {

    constructor(props) {
        super(props);
        this.handleChecklistClick = this.handleChecklistClick.bind(this);
        this.renderItems = this.renderItems.bind(this);
        this.state = {
            checkList: 1,   
            checkList1Tasks: {
                "title": "Sample IP Troubleshooter",
                "type": "checklist",
                "id": "sipt-1",
                "category": "Networking",
                "author": "jjas <julius.salonen@visma.com>",
                "steps": [
                    {"title": "Ping Google",
                        "type": "step-task",
                        "description": "This pings google.",
                        "shell": "/api/shellPing/www.google.com",
                       "interactive": true},
                     
                     {"title": "Ping a fake website",
                      "type": "manual-task",
                      "description": "Ping a website that doesn't exist.",
                      "shell": "/api/shellPing/www.asddsaasdasd.com",
                      "interactive": false
                     }
                ]
            },
            checkList2Tasks: {
                "title": "Git-update the app",
                "type": "checklist",
                "id": "sipt-1",
                "category": "Networking",
                "author": "jjas <julius.salonen@visma.com>",
                "steps": [
                     {"title": "Pull this app from GitHub",
                      "description": "Pull this app from Git and reload it.",
                      "shell": "/api/pullFromGit",
                      "interactive": true}
                ]
            },
            checkList3Tasks: {
                "title": "Shell script runners",
                "type": "checklist",
                "id": "sipt-1",
                "category": "Networking",
                "author": "jjas <julius.salonen@visma.com>",
                "steps": [
                    {"title": "Run Hello World -script",
                        "type": "step-1task",
                        "description": "Should print Hello World to console.",
                        "shell": "/api/shellScript/testScript.sh",
                       "interactive": true},
                     
                     {"title": "Run longer script",
                      "type": "manual-task",
                      "description": "Run a script that prints more output to the console.",
                      "shell": "/api/shellScript/testScript2.sh",
                      "interactive": false
                     }
                ]
            },
            checkList4Tasks: {
              "title": "Lots of items here",
              "type": "checklist",
                "steps": [
                  {"title": "Run Hello World -script",
                    "type": "step-1task",
                    "description": "Should print Hello World to console.",
                    "shell": "/api/shellScript/testScript.sh",
                    "interactive": true},
                  {"title": "Run Hello World -script",
                    "type": "step-1task",
                    "description": "Should print Hello World to console.",
                    "shell": "/api/shellScript/testScript.sh",
                    "interactive": true},
                  {"title": "Run Hello World -script",
                    "type": "step-1task",
                    "description": "Should print Hello World to console.",
                    "shell": "/api/shellScript/testScript.sh",
                    "interactive": true},
                  {"title": "Run Hello World -script",
                    "type": "step-1task",
                    "description": "Should print Hello World to console.",
                    "shell": "/api/shellScript/testScript.sh",
                    "interactive": true},
                  {"title": "Run Hello World -script",
                    "type": "step-1task",
                    "description": "Should print Hello World to console.",
                    "shell": "/api/shellScript/testScript.sh",
                    "interactive": true},
                  {"title": "Run Hello World -script",
                    "type": "step-1task",
                    "description": "Should print Hello World to console.",
                    "shell": "/api/shellScript/testScript.sh",
                    "interactive": true},
                  {"title": "Run Hello World -script",
                    "type": "step-1task",
                    "description": "Should print Hello World to console.",
                    "shell": "/api/shellScript/testScript.sh",
                    "interactive": true},
                ]
            },
        }
    }

    handleChecklistClick(idx) {
        console.log(idx);
        this.setState({checkList: idx});
    }

    render() {
        return (
            <div className={this.props.classes.root}>
                <CssBaseline />
            <AppBar position="fixed" className={this.props.classes.appBar} style={{backgroundColor: '#1b2d18'}}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                    Tasks
                    </Typography>
                </Toolbar>
                </AppBar>
                <Drawer
                className={this.props.classes.drawer}
                variant="permanent"
                classes={{
                    paper: this.props.classes.drawerPaper,
                }}
                anchor="left"
                >
                <img src="public/tee.png" height="100" width="220" style={{marginTop: "10px", marginLeft: "10px", marginBottom: "-50px", borderRadius: "10px"}}/>
                <div className={this.props.classes.toolbar} />  
                <Divider />
                <List>
                    {['Network', 'Git', 'Shell', 'Checklist 4'].map((text, index) => (
                    <ListItem button key={text} onClick={() => this.handleChecklistClick(index + 1)}>
                        <ListItemIcon><BuildIcon/></ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                    ))}
                </List>
                <Divider />
                </Drawer>
                <main className={this.props.classes.content}>
                <div className={this.props.classes.toolbar} />
                <Grid container direction="column" alignItems="stretch" spacing={16}>
                        {this.renderItems()}
                </Grid>
                </main>
            </div>
        );
    }

    renderItems() {
        switch (this.state.checkList) {
            case 1:
                return this.state.checkList1Tasks.steps.map((task, index) => {return <MyListItem key={"checkList" + this.state.checkList + "-" + index} text={task.title} action={task.shell} description={task.description}/> });
                break;
            case 2:
                return this.state.checkList2Tasks.steps.map((task, index) => {return <MyListItem key={"checkList" + this.state.checkList + "-" + index} text={task.title} action={task.shell} description={task.description}/> });
                break;
            case 3:
                return this.state.checkList3Tasks.steps.map((task, index) => {return <MyListItem key={"checkList" + this.state.checkList + "-" + index} text={task.title} action={task.shell} description={task.description}/> });
                break;
            case 4:
                return this.state.checkList4Tasks.steps.map((task, index) => {return <MyListItem key={"checkList" + this.state.checkList + "-" + index} text={task.title} action={task.shell} description={task.description}/> });
                break;
            default:
                return <p>broked</p>
                break;
        }
    }
}

// export default withStyles(styles)(App);
export default withTheme()(withStyles(styles)(App));