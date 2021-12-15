import React from 'react';
import { Button } from 'General';

const Vote = function (props) {
  return (
    <div className="card-vote">
      <img src={props.upvote} alt="upvote" />
      <img src={props.downvote} alt="downvote" />
      <p>
        {props.vote}
      </p>
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
      <div className="card">
        <h2>
          {props.title}
        </h2>
        <h3>
          {props.description}
        </h3>
        <Vote vote={props.vote} />
        <div className="bottom">
          <div className="link-background">
            <p>{props.link}</p>
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
