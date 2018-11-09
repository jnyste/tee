import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class ListItem extends Component {
    
    constructor(props) {
        super(props);
        // Status codes: 0 = Not done 1 = Error 2 = Success
        this.state = { statusCode: 0 }
    }

    renderStatus() {
    
    }
    
    render() {
        return (
            <Grid item xs={6}>
                <Paper>
                    <Typography component="h3">{this.props.text}</Typography>
                </Paper>
            </Grid>
            )};
};