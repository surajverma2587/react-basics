import React, { Component } from 'react';
import Cart from './Cart';
import Menu from './Menu';
import data from '../assets/data';
import menuHelper from '../helpers/menuHelper';
import cartHelper from '../helpers/cartHelper';

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
    /* Note: If no items have been selected then do not render the Cart. */
    /* return the populated app template and replace the bottom return statement */
    return (
      <div className="container">Your App goes here...</div>
    );
  }
}

export default App;