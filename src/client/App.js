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
      <Grid container direction="column">
        <ListItem text="Ping www.google.com"/>
        <ListItem text="Play more Eurobeat"/>
        <ListItem text="Juo es :D "/>
        <ListItem text="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"/>
        <ListItem text="tööt"/>
      </Grid>
    );
  }
}
