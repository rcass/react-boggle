import React from 'react';
import './Button.css';

const Button = (props) => {
  // TODO 1) : Destructure Button props
  const {handleSubmit, label} = props; // you could also do the deconstructor inside the props pram


  return (
    <button className="button"
      // TODO 4) : Handle on click callback
      // onClick={()=>alert('button clicked!')} // Testing if onclick works
      onClick={()=>alert('handleSubmit')}

    >
      {/* TODO 1): Render button label */}
      {label}
    </button>
  );
};

export default Button;
