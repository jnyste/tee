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
            <div>
                <Grid item xs={3}/>
        <Grid item xs={6}>
        <Paper>
            <Typography variant="h5">
                    {this.props.text}
            </Typography>
        </Paper>
        </Grid>
        <Grid item xs={3}/>        
        )};
};