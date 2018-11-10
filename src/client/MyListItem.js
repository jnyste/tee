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
import IndeterminateCheckBox from '@material-ui/icons/IndeterminateCheckBox';
import TouchRipple from '@material-ui/core/ButtonBase/TouchRipple';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2
    },
    success: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        paddingLeft: theme.spacing.unit * 2,
        background: 'linear-gradient(30deg, #97c16b 75%, #6E836A 75%)'
    },
  failure: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    background: 'linear-gradient(150deg, #C16B6B 75%, #ff2a3a 75%)'
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

      this.setState({
          status: 1
      });
    
      fetch(this.props.action).then((response) => response.json()).then((json) => {
        if (json["status"] == 0) {
            this.setState({ status: 2})
        } else {
            this.setState({ status: -1});
        }
        if (json["out"] != undefined) {
            console.log(json["out"]);
        }
      });

  };

  render () {
    return (
        //><ButtonBase>
        <Grid item xs={12}>
            <Paper onClick={this.handleClick} className={this.getClass(this.state.status)}>
                <Typography component="h3" variant="h4">{ this.renderStatus() } {this.props.text}</Typography>
                <Typography variant="subtitle1" gutterBottom>{ this.props.description}</Typography>
                <Typography variant="subtitle2" gutterBottom>{this.props.action} </Typography>
            </Paper>
        </Grid>
        //</ButtonBase>
    );
  }

  getClass(status) {
        if (status == 0)
            return this.props.classes.root;
        else if (status == 1)
            return this.props.classes.root;
        else if (status == 2)
            return this.props.classes.success;
        else if (status == -1)
            return this.props.classes.failure;
  }

  renderStatus() {
    switch (this.state.status) {
        case 0:
        return <CheckBoxOutlineBlank onClick={this.handleClick}/>
        case 1:
        return <CircularProgress color="secondary" size={30} />
        case 2:
        return <CheckBox style={{color: 'green'}} onClick={this.handleClick}/>
        default:
        return <IndeterminateCheckBox onClick={this.handleClick}/>
    }
  }

}

export default withStyles(styles)(MyListItem);