import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false };
    this.printLoginStatus = this.printLoginStatus.bind(this);
  }

  printLoginStatus() {
    if (this.state.isLoggedIn) {
      return <img src="" alt="avatar" className="avatar" />;
    }
    return (
      <div>
        <a href="search.html" className="sign-up">
          Sign Up
        </a>
        <a href="" className="log-in">
          Log In
        </a>
      </div>
    );
  }

	search(key, query) {
		//
	}

  render() {
		if (this.props.type === "dataset-page") {
    	return (
     	 <div className="header-dataset">
     	   <img src="../assets/logo.svg" className="logo" />
     	   <input type="search" className="search" />
     	   <img src="../assets/search.svg" alt="search-icon" className="search-icon" />
     	   {this.printLoginStatus()}
     	 </div>
    	);
		} else if (this.props.type === "basic") {
    	return (
     	 <div className="header">
     	   <img src="../assets/logo.svg" className="logo" />
     	   <input type="search" className="search" />
     	   <img src="../assets/search.svg" alt="search-icon" className="search-icon" />
     	   {this.printLoginStatus()}
     	 </div>
			)
		} else {
			return(
     	 <div className="header">
     	   <img src="../assets/logo.svg" className="logo" />
     	   <input type="search" className="search" />
     	   <img src="../assets/search.svg" alt="search-icon" className="search-icon" />
     	   {this.printLoginStatus()}
     	 </div>
			)
		}
  }
}

export default Header;
