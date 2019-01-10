import React from 'react';
import PropTypes from 'prop-types';
/* external library to render the stars for ratings */
/* https://www.npmjs.com/package/react-star-ratings */
import StarRatings from 'react-star-ratings';

const MenuHeader = (/* props object */) => {
  /* bind the data from the props object to the html template */
  /* replace the bottom return statement with the populated html template */
  return (
    <div>
      Menu Header Component
    </div>
  );
};

/* display name for the component */
MenuHeader.displayName = 'MenuHeader';

MenuHeader.propTypes = {
  /* add Proptypes here */
};

export default MenuHeader;