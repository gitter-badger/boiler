import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }
  static propTypes = {
    color: PropTypes.string.isRequired,
    increment: PropTypes.number.isRequired
  }
  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 30000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  render() {
    return (
      <p style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </p>
    );
  }
}
