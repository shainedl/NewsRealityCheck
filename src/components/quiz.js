import React, { Component } from 'react';
import Questions from './questions';
import Result from './result';

export default class Quiz extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="head-nrc">
          <p>POLLITIC</p>
        </div>
        <h1 className="site-title">
          <a>Heartbeat Abortion Bill</a>
        </h1>
        <h2 className="site-title-dark">
          <a>All responses are anonymous, so please answer as honestly as possible and complete all questions. We will not show any segment that contains less than three people in it.</a>
        </h2>
        <Questions />
        <Result />
      </div>
    );
  }
}
