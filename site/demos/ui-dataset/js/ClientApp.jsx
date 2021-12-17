import React from 'react';
import { render } from 'react-dom';
import DatasetPage from './DatasetPage';
import data from '../data.json';

const dataset = data['common-gen'];

const App = function () {
  return (
    <div className="paging">
      <DatasetPage title={dataset.title} description={dataset['card-description']} score={dataset.upvotes} />
      // sidebar // buttons
    </div>
  );
};

render(<DatasetPage />, document.getElementById('appDiv'));
