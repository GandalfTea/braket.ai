import React from 'react';
import DatasetCard from './DatasetCard';
import SidePanel from './SidePanel';
import Content from './Content';
import data from '../data.json';

const dataset = data['common-gen'];

class DatasetPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="paging">
	<img src='../assets/logo.svg' className="logo" />
        <DatasetCard
          title={dataset.title}
          description={dataset['card-description']}
          score={dataset.upvotes}
          link={dataset['cdn-link']}
          raddress={dataset.raddress}
        />
        <SidePanel />
	<Content />
      </div>
    );
  }
}

export default DatasetPage;
