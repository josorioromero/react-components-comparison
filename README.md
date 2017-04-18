## Instructions

```
npm install
npm start
```

This project will run on `localhost:3000`

## Expected behavior

If you click the button, the state of the app will change. If you open
your console on the browser you'll see an output for each component that is
rendered with the state change.

You can see the functional and the class Component will be rendered everytime
no matter if their props aren't changing, but the PureComponent will be rendered
only if its properties are mutated.

Try to change the PureComponent properties with the click event and you'll see
how it's rendered again when the property change.

## Note

This app was bootstraped with the wonderful [create-react-app](https://github.com/facebookincubator/create-react-app) tool.
