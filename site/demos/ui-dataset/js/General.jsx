import React from 'react';

const Button = function (props) {
  if (props.type === 'full') {
    return (
      <button type="button" className="button">
        <p>{props.text}</p>
      </button>
    );
  } if (props.type === 'border') {
    return (
      <button type="button-border" className="button">
        <p>{props.text}</p>
      </button>
    );
  }
};

const Tag = function (props) {
  return (
    <div className="tag">
      <p>{props.text}</p>
    </div>
  );
};

export default Button;
export default Tag;
