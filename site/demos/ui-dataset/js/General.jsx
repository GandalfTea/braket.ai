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
  return (
    <button type="button" className="button-border">
      <p>{props.text}</p>
    </button>
  );
};

const Tag = function (props) {
  return (
    <div className="tag">
      <p>{props.text}</p>
    </div>
  );
};

export { Button, Tag };
