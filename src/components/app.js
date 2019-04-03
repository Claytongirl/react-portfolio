import React, { Component } from 'react';

import moment from "moment";

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>DevCamp React Starter</h1>
        <div>
        {moment().format('MMMM Do YYYY, h:mmss a')}
        </div>
      </div>
    );
  }
}
