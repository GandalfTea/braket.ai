import React from 'react';
import { render } from 'react-dom';
import DatasetPage from './DatasetPage';
import data from '../data.json';

const App = function () {
  return (
    <div className="paging">
      <DatasetPage />
      // sidebar // buttons
    </div>
  );
};

render(<DatasetPage />, document.getElementById('appDiv'));
