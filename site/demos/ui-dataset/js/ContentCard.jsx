import React from 'react';
import data from '../data.json';
import code from '../data-code.json';
import Vote from './Vote';

const dataset = data['common-gen'];

const Card = function (props) {
  return <div className="card">{props.content}</div>;
};

const ReadMe = function (props) {
  const codes = dataset.description.split('```');
  const code_blocks = [];
  codes.pop();
  if (codes.length % 2 === 0) {
    for (let i = 1; i < codes.length; i + 2) {
      code_blocks.push(codes.splice(i, i + 1));
    }
  }
  const md = dataset.description.split('\n').map((x) => <p>{x}</p>);
  return <Card content={md} />;
};

const Snippet = function () {
  const format = <pre>{JSON.stringify(dataset.preview['0'], undefined, 2)}</pre>;

  let table = [];
  const table_entries = [];
  const columns = [];
  let elements = [];

  for (const i in dataset.preview) {
    table_entries.push(dataset.preview[i]);
  }
  for (const column in table_entries[0]) {
    columns.push(column);
  }

  table.push(
    <tr>
      {columns.map((x) => (
        <th>{x}</th>
      ))}
    </tr>
  );
  table.push(
    <tr>
      {columns.map((x) => (
        <td>
          <i>{typeof x}</i>
        </td>
      ))}
    </tr>
  );

  for (const entry of table_entries) {
    let log = [];
    for (const column of columns) {
      if (Array.isArray(entry[column])) {
        for (const elm of entry[column]) {
          elements.push(elm);
        }
        elements = elements.map((x) => <p>{x}</p>);
        log.push(elements);
        elements = [];
      } else {
        log.push(entry[column]);
      }
    }
    log = log.map((x) => <td> {x} </td>);
    table.push(<tr>{log}</tr>);
  }
  table = (
    <table className="data-table" align="center">
      {table}
    </table>
  );

  return (
    <div>
      <Card content={format} />
      <Card content={table} />
    </div>
  );
};

const Code = function () {
  // send request to server to get code examples .json
  const cards = [];
  for (const entry of code.code) {
    const card = (
      <div className="code-card">
        <div>
          <a href={entry.link}>
            <i>
              <h3>{entry.name}</h3>
            </i>
          </a>
          <p className="code-author">
            by
            {entry.author}
          </p>
          <p>{entry.description}</p>
        </div>
        <Vote score={entry.score} color="black" />
      </div>
    );
    cards.push(<Card content={card} />);
  }

  return <div>{cards}</div>;
};

/*
const Issues = () = {
	// request issues
}

const Discussion = () => {
	// request discussion
}
*/

export { Card, ReadMe, Snippet, Code };
