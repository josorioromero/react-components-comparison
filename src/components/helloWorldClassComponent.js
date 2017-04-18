import React, { Component } from 'react';

class HelloWorldClassComponent extends Component {
  render() {
    window.console.log('Rendering: Component')
    return (<div>{`Hi ${this.props.name} I'm using React.Component`}</div>);
  }
}

export default HelloWorldClassComponent;
