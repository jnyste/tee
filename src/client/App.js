import React, { Component } from 'react';
import './app.css';
import ListItem from './ListItem.js';
import Grid from '@material-ui/core/Grid';

export default class App extends Component {
  state = { username: null };

  componentDidMount() {
    /* fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username })); */
  }

  render() {
    const { username } = this.state;
    return (
      <Grid container justify="center" alignItems="center" direction="column" spacing={16}>
        <ListItem text="Ping www.google.com"/>
        <ListItem text="Ping www.google.com"/>
        <ListItem text="Ping www.google.com"/>
        
      </Grid>
    );
  }
}
