import React from 'react';
import './Button.css';

const Button = props => {
  // TODO 1) : Destructure Button props
  const {label} = props; // you could also do the deconstructor inside the props pram

  return (
    <button className="button"
      // TODO 4) : Handle on click callback
    >
      {/* TODO 1): Render button label */}
      {label}
    </button>
  );
};

export default Button;
