import React from 'react';
import { Button } from './General';

class Vote extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isPressedUpvote: false, isPressedDownvote: false };
    this.renderImg = this.renderImg.bind(this);
    this.vote = this.vote.bind(this);
  }

  // Choose which image to render depending on state
  renderImg(orientation) {
    if (orientation === 'upvote') {
      const imup = this.state.isPressedUpvote ? '../assets/vote_pressed.svg' : '../assets/vote.svg';
      return <img src={imup} alt="upvote" className="upvote" />;
    }
    if (orientation === 'downvote') {
      const imdown = this.state.isPressedDownvote ? '../assets/vote_pressed.svg' : '../assets/vote.svg';
      return <img src={imdown} alt="downvote" className="downvote" />;
    }
    return <img src="../assets/clipboard.svg" />;
  }

  // Sent vote to server and update state
  vote(vote) {
    if (vote === 'up' ? !this.state.isPressedUpvote : !this.state.isPressedDownvote) {
      // send request to server
      vote == 'up'
        ? this.setState((prevState) => {
            !prevState.isPressedUpvote;
          })
        : this.setState((prevState) => {
            !prevState.isPressedDownvote;
          });
      return;
    }

    // send request to cancel the like
    vote == 'up'
      ? this.setState((prevState) => {
          !prevState.isPressedUpvote;
        })
      : this.setState((prevState) => {
          !prevState.isPressedDownvote;
        });
  }

  render() {
    return (
      <div className="card-vote">
        <button type="button" className="score_button" onClick={this.vote.bind(this, 'up')}>
          {this.renderImg('upvote')}
        </button>
        <button type="button" className="score_button" onClick={this.vote.bind(this, 'down')}>
          {this.renderImg('downvote')}
        </button>
        <p>{this.props.vote}</p>
      </div>
    );
  }
}

class DatasetCard extends React.Component {
  constructor(props) {
    super(props);
  }

  // is object because I want to live update the upvotes

  render() {
    const address = [];
    const raddress = this.props.raddress.split(' / ');
    for (const element in raddress) {
      address.push(<a href="">{raddress[element]} / </a>);
    }

    return (
      <div className="card-address">
        <div className="relative-address">
          {address} <strong>{this.props.title}</strong>
        </div>
        <div className="dataset-card">
          <h2>{this.props.title}</h2>
          <h3>{this.props.description}</h3>
          <Vote vote={this.props.score} />
          <div className="bottom">
            <div className="link-background">
              <p>{this.props.link}</p>
              <a>
                <img src="../assets/clipboard.svg" alt="copy to clipboard" className="link-copy" />
              </a>
            </div>
            <div className="buy">
              <Button type="full" text="Buy" />
            </div>
            <Button type="border" text="Test" />
          </div>
        </div>
      </div>
    );
  }
}

export default DatasetCard;
