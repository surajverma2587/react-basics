import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import CartTotals from './CartTotals';
import '../../assets/styles.css';

const renderCartItems = (/* cartItems */) => {
  // return list of CartItem components
}

const Cart = (/* props object */) => {
  /* bind the data from the props object to the html template */
  /* validate the props and render the component IF valid ELSE null */
  /* remember to call renderCartItems() to render a list of CartItem components */
  /* also render the CartTotal component and pass the required props */
  /* replace the bottom return statement with the populated html template */
  return (
    <div>
      Cart Component
    </div>
  );
};

/* display name for the component */
Cart.displayName = 'Cart';

Cart.propTypes = {
  /* add Proptypes here */
};

export default Cart;