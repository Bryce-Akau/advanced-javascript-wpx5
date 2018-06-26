import React, { Component } from 'react';

export default class MyRenderPropComponent extends Component {
  constructor() {
    super();
    this.state = {
      lightbulbState: true,
    }
    this.switcher = this.switcher.bind(this);
  }

  switcher() {
    this.setState({ lightbulbState: !this.state.lightbulbState });
  }

  render() {
    return (
      this.props.children(this.state.lightbulbState, this.switcher)
    );
  }
}
