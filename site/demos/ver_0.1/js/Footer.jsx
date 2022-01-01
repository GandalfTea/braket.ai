import React from 'react';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    props.type == 'dataset' ? (this.state = { type: 'dataset' }) : (this.state = { type: 'simple' });
    this.printFooter = this.printFooter.bind(this);
  }

  printFooter(type) {
    if (this.state.type == 'dataset') {
      return (
        <div className="footer-simple-dataset">
          <img src="../assets/footer-icon.svg" />
          <p> &copy; 2021 braket.ai</p>
          <div className="footer-simple__buttons">
            <a href="">About</a>
            <a href="">Terms</a>
            <a href="">Privacy</a>
            <a href="">Docs</a>
            <a href="">API</a>
            <a href="">CLI</a>
          </div>
        </div>
      );
    }
    if (this.state.type == 'simple') {
      return (
         <div className="footer-simple">
          <img src="../assets/footer-icon.svg" />
          <p> &copy; 2021 braket.ai</p>
          <div className="footer-simple__buttons">
            <a href="">About</a>
            <a href="">Terms</a>
            <a href="">Privacy</a>
            <a href="">Docs</a>
            <a href="">API</a>
            <a href="">CLI</a>
          </div>
        </div>
      );
    }
    console.log('Error: printFooter() argument is invalid');
    return (
      <div className="footer-simple">
        <img src="../assets/footer-icon" />
        <p> &copy; braket.ai, Inc.</p>
        <div className="footer-simple__buttons">
          <a href="">About</a>
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Docs</a>
          <a href="">API</a>
          <a href="">CLI</a>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.printFooter()}</div>;
  }
}

export default Footer;
