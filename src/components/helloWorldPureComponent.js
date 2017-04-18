import React, { PureComponent } from 'react';

class HelloWorldPureComponent extends PureComponent {
  render() {
    window.console.log('Rendering: PureComponent')
    return (<div>{`Hi ${this.props.name} I'm using React.PureComponent`}</div>);
  }
}

export default HelloWorldPureComponent;
