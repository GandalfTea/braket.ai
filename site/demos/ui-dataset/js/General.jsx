import React from 'react';

const Button = function (props) {
  if (props.type === 'full') {					// Button with white background
    return (
      <button type="button" className="button">
        <p>{props.text}</p>
      </button>
    );
  }
  if (props.type === 'border') {				// Button with bordered background and transparent interior
    return (
      <button type="button" className="button-border">
        <p>{props.text}</p>
      </button>
    );
  }
  if (props.type === 'tag') {						// Button with black background
    return (
      <button type="button" className="button-tag">
        <p>{props.text}</p>
      </button>
    );
  }
	if (props.type === 'none') {					// Button with no margin
		let classes = "button-none";
		(props.clicked === true) ? classes += " button-none__clicked" : classes += ""; 
    return (
      <button type="button" className={classes}>	
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
