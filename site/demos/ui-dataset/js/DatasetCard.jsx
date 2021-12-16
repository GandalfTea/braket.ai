import React from 'react';
import { Button } from './General';

const Vote = function (props) {
  return (
    <div className="card-vote">
      <img src="../assets/upvote.svg" alt="upvote" />
      <img src="../assets/downvote.svg" alt="downvote" />
      <p>{props.vote}</p>
    </div>
  );
};

class DatasetCard extends React.Component {
  constructor(props) {
    super(props);
  }

  // is object because I want to live update the upvotes

  render() {
    return (
      <div className="dataset-card">
        <h2>{this.props.title}</h2>
        <h3>{this.props.description}</h3>
        <Vote vote={this.props.vote} />
        <div className="bottom">
          <div className="link-background">
            <p>{this.props.link}</p>
          </div>
          <div className="buy">
            <Button type="full" text="Buy" />
          </div>
          <Button type="border" text="Test" />
        </div>
      </div>
    );
  }
}

export default DatasetCard;
