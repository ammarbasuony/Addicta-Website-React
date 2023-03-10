// Dependencies
import React from 'react';
import PropTypes from 'prop-types';


// Stateless component / Functional component
const Field = (props) => {
  if (props.label === "Message") {
    return (
      <>
        <label className={props.labelClass}>{props.label}</label>
        <textarea
          onChange={props.onChange}
          type='text'
          value={props.value}
          placeholder={props.placeholder}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          className={props.border}
        />
        <p className="error">{props.error}</p>
      </>
    );

  } else {
    return (
      <>
        <label className={props.labelClass}>{props.label}</label>
        <input
          onChange={props.onChange}
          type={props.type ? props.type : 'text'}
          value={props.value}
          placeholder={props.placeholder}
          onFocus={props.onFocus}
          onBlur={props.onBlur}
          className={props.border}
        />
        <p className="error">{props.error}</p>
      </>
    );
  }
};

// PropTypes is a way to ensure we are expecting
// certain props that will enable the component to
// function properly.
Field.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  isfocused: PropTypes.bool,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  border: PropTypes.string,
  error:PropTypes.string,
  labelClass:PropTypes.string
};



export default Field;