

import React from 'react';
import data from '../data.json';

const dataset = data['common-gen'];

const Card = (props) => {
	return (
		<div class="card">
			{props.content}
		</div>
	);
}


const ReadMe = (props) => {
	return(
		<Card content={dataset.description} />
	)
}


const Snippet = () => {
	format = <pre>JSON.stringify(dataset['preview']['0'], undefined, 2)</pre>
	// format content into html table
	return(
		<div>
			<Card content={format} />
			<Card content={preview} />
		</div>
	)
} 
/*
const Code = () => {
	// send request to server to get code examples .json
}

const Issues = () = {
	// request issues
}

const Discussion = () => {
	// request discussion
}
*/

export { Card, ReadMe, Snippet };
