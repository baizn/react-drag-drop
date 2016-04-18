import React, { Component } from 'react';
import Board from './board';
import { observe } from './game';

/**
 * Unlike the tutorial, export a component so it can be used on the website.
 */
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.unobserve = observe(this.handleChange.bind(this));
  }

  handleChange(knightPosition) {
    const nextState = { knightPosition };
    if (this.state) {
      this.setState(nextState);
    } else {
      this.state = nextState;
    }
  }

  componentWillUnmount() {
    this.unobserve();
  }

  render() {
    const { knightPosition } = this.state;
    return (
      <div>
        <Board knightPosition={knightPosition} />
      </div>
    );
  }
}