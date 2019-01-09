import React from 'react';
import PropTypes from 'prop-types';
/* external library to render the stars for ratings */
/* https://www.npmjs.com/package/react-star-ratings */
import StarRatings from 'react-star-ratings';
import MenuSection from './MenuSection';

const renderMenuSections = (/* menuSections */) => {
  /* map through the menuSections prop and return a list of MenuSection components */
};

const Menu = (/* props object */) => {
  /* bind the data from the props object to the html template */
  /* validate the props and render the component IF valid ELSE null */
  /* remember to call renderMenuSections() to render a list of MenuSection components */
  /* replace the bottom return statement with the populated html template */
  return (
    <div>
      Menu Component
    </div>
  );
};

/* display name for the component */
Menu.displayName = 'Menu';

Menu.propTypes = {
  /* add Proptypes here */
};

export default Menu;