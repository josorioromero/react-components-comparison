import React from 'react';

const HelloWorldFunctional = props => {
  window.console.log('Rendering functional component');
  return (
    <div>{`Hi ${props.name} I'm a functional component`}</div>
  );
}

export default HelloWorldFunctional;
