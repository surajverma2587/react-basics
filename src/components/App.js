import React, { Component } from 'react';
/* import the child components styles and helper functions here */

class App extends Component {
  constructor(props) {
    super(props);

    /* bind functions if needed here */
    /* define application state here */
  }

  componentDidMount() {
    /* fetch data from the server and update state here */
    /* if you are using local data then update state with local data here */
  }

  recalculate(/* items */) {
    /* calculate the sub total, taxes, delivery and total and return the values */
  }

  onClickCartItem(/* event */) {
    /* remove cart item from the list of cart items */
    /* recalculate the totals */
    /* update state */
  }

  onClickMenuItem(/* event */) {
    /* add cart item to the list of cart items */
    /* recalculate the totals */
    /* update state */
  }

  render() {
    /* If the loading state is true then render loading */
    /* If the error state is true then render error */
    /* Note: If the total is 0 then do not render the Cart. */
    /* Else return the populated app template and replace the bottom return statement */
    return (
      <div className="container">Your App goes here...</div>
    );
  }
}

export default App;