import React from 'react';
import Header from './Header';
import DatasetCard from './DatasetCard';
import SidePanel from './SidePanel';
import Content from './Content';
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
        <Header />
        <DatasetCard
          title={dataset.title}
          description={dataset['card-description']}
          score={dataset.score}
          link={dataset['cdn-link']}
          raddress={dataset.raddress}
        />
        <SidePanel />
        <Content />
        <Footer type="simple" />
      </div>
    );
  }
}

export default DatasetPage;
