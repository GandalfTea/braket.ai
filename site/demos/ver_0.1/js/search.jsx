import React from 'react';
import { render } from 'react-dom';
import DatasetSearchCard from './DatasetSearchCard';
import Header from './Header';
import Footer from './Footer';
import data from '../search-result.json';

const { results } = data;
const ui = results.map((x) => (
  <DatasetSearchCard
    name={x.name}
    description={x.description}
    data={x.data}
    snippet={x.data[0]}
    licence={x.licence}
    tags={x.tags}
    score={x.score}
  />
));

class SearchResult extends React.Component {
  render() {
    return (
      <div>
        <Header type="basic" />
        <i>
          <h1 className="query">{data.query}</h1>
        </i>
        <div className="results">{ui}</div>
        <Footer type="simple" />
      </div>
    );
  }
}

render(<SearchResult />, document.getElementById('search'));
