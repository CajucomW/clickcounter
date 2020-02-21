This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Simple Click Counting App

In this project I recreated something I learned in class regarding basic application of the "State" object to render components. 

### `12/01/2019:`

Included Componentization to allow two buttons that count up separately with coded comments regarding on pattern flow.

### `"Click Here"`

As the instruction suggests, click the text and watch the number go up, up, and up!
The "Click" and "Tap" texts live in `App.js`, while the `onClick` event is now located in a separate child component `Button.js`. Properties have been passed to the `Button.js` component from the parent component, `App.js`. Within the function, the state is reset to add +1 to the defined object that was originally set to 0 (zero). Every `onClick` event adds +1 the state, which increases the counter by, well, 1!

### `TODO`

Add a "Reset" button to return values to "0"

This project was based on classwork from
https://www.kickstartcoding.com
