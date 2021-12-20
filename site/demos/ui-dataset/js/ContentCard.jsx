import React from 'react';
import data from '../data.json';
import code from '../data-code.json';
import Vote from "./Vote"

const dataset = data['common-gen'];

const Card = function (props) {
  return <div className="card">{props.content}</div>;
};

const ReadMe = function (props) {
  return <Card content={dataset.description} />;
};

const Snippet = function () {
  const format = <pre>{JSON.stringify(dataset['preview']['0'], undefined, 2)}</pre>;
	
	var table = []
	var table_entries = []
	var columns = [];
	var elements = []

	for(const i in dataset['preview']) {
		table_entries.push(dataset['preview'][i])
	}
	for(const column in table_entries[0]) {
		columns.push(column);
	}

	table.push( <tr>{columns.map( x => <th>{x}</th>)}</tr> );
	table.push( <tr>{columns.map( x => <td><i>{typeof(x)}</i></td>)}</tr> );

	for( const entry of table_entries) {
		var log = []
		for( const column of columns) {
			if(Array.isArray(entry[column])) {
				for( const elm of entry[column]) {
					elements.push(elm);
				}
				elements = elements.map(x => <p>{x}</p>)
				log.push(elements)
				elements = []
			} else {
				log.push(entry[column])
			}
		}
		log = log.map( x => <td>{" "}{x}{" "}</td>)
		table.push(<tr>{log}</tr>)
	}
	table = <table className="data-table" align="center">{table}</table>

  return (
    <div>
      <Card content={format} />
			<Card content={table} />
    </div>
  );
};


const Code = () => {
	// send request to server to get code examples .json
	var cards = []
	for(const entry of code["code"]) {
		var card = (
			<div className="code-card">
					<div>
						<a href={entry["link"]}><h3>{entry["name"]}</h3></a>
						<p>{entry["author"]}</p>
						<p>{entry["description"]}</p>
					</div>
					<Vote vote={entry["score"]} />
			</div>
		)
		cards.push(<Card content={card} />)
	}

	return(
		<div>	
			{cards}
		</div>
	)
}




/*
const Issues = () = {
	// request issues
}

const Discussion = () => {
	// request discussion
}
*/

export { Card, ReadMe, Snippet, Code };
