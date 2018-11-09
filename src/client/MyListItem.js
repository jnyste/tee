import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlank from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBox from '@material-ui/icons/CheckBox';


const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2
    }
});

class MyListItem extends React.Component {
  
  constructor(props) {
      super(props);
      this.state = {status: 0, checked: false}
      this.handleClick = this.handleClick.bind(this);
  }

 handleClick() {

      if (this.state.status != 0) {
          return;
      }

      this.setState(state => {
          status: 1
      });
    
      fetch(this.props.action).then((response) => response.json()).then((json) => {
        if (json["status"] == 0) {
            this.setState({ status: 2})
        } else {
            this.setState({ status: -1});
        }
      });

  };

  render () {
    return (
        <Grid item xs={12}>
            <Paper className={this.props.classes.root}>
                <Typography component="h3" variant="h3">{this.props.text} {this.props.action} {this.state.status}</Typography>
                { this.renderStatus() }
            </Paper>
        </Grid>
    );
  }

  renderStatus() {
    switch (this.state.status) {
        case 0:
        return <CheckBoxOutlineBlank onClick={this.handleClick}/>
        case 2:
        return <CheckBox onClick={this.handleClick}/>
        default:
        return <p>broken</p>
    }
  }

}

export default withStyles(styles)(MyListItem);