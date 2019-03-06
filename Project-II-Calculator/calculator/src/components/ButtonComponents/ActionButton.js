import React from 'react';
import './Button.css';

const ActButtons = (props) => {
  return (
    <div className="ActButtons">
    {props.action}
    </div>
  );
};


export default ActButtons;