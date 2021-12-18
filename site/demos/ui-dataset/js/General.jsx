import React from 'react';

const Button = function (props) {
  if (props.type === 'full') {
    return (
      <button type="button" className="button">
        <p>{props.text}</p>
      </button>
    );
  }
  if (props.type === 'border') {
    return (
      <button type="button" className="button-border">
        <p>{props.text}</p>
      </button>
    );
  }
  if (props.type === 'tag') {
    return (
      <button type="button" className="button-tag">
        <p>{props.text}</p>
      </button>
    );
  }

  return (
    <button type="button" className="button-border">
      <p>{props.text}</p>
    </button>
  );
};

export { Button };
