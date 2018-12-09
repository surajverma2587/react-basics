import React, { Component } from 'react';
/* import the child components styles and helper functions here */

class App extends Component {
  constructor(props) {
    super(props);

    /* bind functions if needed here */
    /* define state here */
  }

  componentDidMount() {
    /* fetch data from the server and update state here */
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
    /* return the populated app template */
    return (
      <div className="container">Your App goes here...</div>
    )
  }
}

export default App;