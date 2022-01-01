import React from 'react';
import Header from './Header';
import DatasetCard from './DatasetCard';
import Content from './Content';
import SidePanel from './SidePanel';
import Footer from './Footer';
import data from '../data.json';

const dataset = data['common-gen'];

class DatasetPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="paging">
        <Header type="dataset" />
        <DatasetCard
          title={dataset.title}
          description={dataset['card-description']}
          score={dataset.score}
          link={dataset['cdn-link']}
          raddress={dataset.raddress}
        />
        <SidePanel />
        <Content />
        <Footer type="dataset" />
      </div>
    );
  }
}

export default DatasetPage;
