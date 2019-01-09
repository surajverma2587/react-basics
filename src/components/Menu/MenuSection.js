import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

const renderMenuItems = (/* menuItems */) => {
  /* map through the menuItems prop and return a list of MenuItem components */
};

const MenuSection = (/* props object */) => {
  /* bind the data from the props object to the html template */
  /* validate the props and render the component IF valid ELSE null */
  /* remember to call renderMenuItems() to render a list of MenuItem components */
  /* replace the bottom return statement with the populated html template */
  return (
    <div>
      MenuSection Component
    </div>
  );
};

/* display name for the component */
MenuSection.displayName = 'MenuSection';

MenuSection.propTypes = {
  /* add Proptypes here */
};

export default MenuSection;