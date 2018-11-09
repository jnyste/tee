import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
    }
};

class ListItem extends React.Component {
  constructor(props) {
      super(props);
  }
  render () {
    return (
        <Grid item xs={12}>
            <Paper className={styles.root}>
                <Typography component="h3" variant="h3">{this.props.text}</Typography>
            </Paper>
        </Grid>
    );
  }
}

export default withStyles(styles)(ListItem);