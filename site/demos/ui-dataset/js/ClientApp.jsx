import React from 'react';
import { render } from 'react-dom';
import { DatasetPage } from "./DatasetPage"
import data from "../data.json"


Data = JSON.parse(data);



const App = function () {
  return (
    <DatasetPage />      
  ) 
};
render(<App />, document.getElementById('app'));
