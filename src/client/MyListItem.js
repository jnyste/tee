import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';

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
  }

  handleChange = name => event => {
      this.setState({
          [name]: event.target.checked
      });
  };

  render () {
    return (
        <Grid item xs={12}>
            <Paper className={this.props.classes.root}>
                <Typography component="h3" variant="h3">{this.props.text}</Typography>
                { this.renderStatus() }
            </Paper>
        </Grid>
    );
  }

  renderStatus() {
    return <Checkbox checked={this.state.checked} onChange={this.handleChange('checked')} value="checked"/>
  }

}

export default withStyles(styles)(MyListItem);