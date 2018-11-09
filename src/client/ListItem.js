import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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
        <Grid item xs>
                <Typography variant="h5">
                    {this.props.text}
                </Typography>
        </Grid>        
        )};
};