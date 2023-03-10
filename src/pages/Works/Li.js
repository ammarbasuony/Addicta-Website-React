// Dependencies
import React from 'react';
import PropTypes from 'prop-types';


// Stateless component / Functional component
const Li = (props) => (
  <li  onClick={props.onclick} className={props.styles}>
    {props.text}
  </li>
);

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.
Li.propTypes = {
  text: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  onclick: PropTypes.func,
  isClicked: PropTypes.bool,
};



export default Li;