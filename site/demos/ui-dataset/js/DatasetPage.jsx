import React from 'react';
import DatasetCard from './DatasetCard';
import SidePanel from './SidePanel';
import data from '../data.json';

const dataset = data['common-gen'];

class DatasetPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="paging">
        <DatasetCard
          title={dataset.title}
          description={dataset['card-description']}
          score={dataset.upvotes}
          link={dataset['cdn-link']}
          raddress={dataset.raddress}
        />
        <SidePanel />
      </div>
    );
  }
}

export default DatasetPage;
