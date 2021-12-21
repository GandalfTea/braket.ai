
import React from 'react';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: false };
		this.printLoginStatus = this.printLoginStatus.bind(this);
	}
	
	printLoginStatus() {
		if(this.state.isLoggedIn) {
			return (<img src='' alt='avatar' className="avatar" />)
		} else {
			return(
				<div>
					<a href='' className='sign-up'>Sign Up</a>
					<a href='' className='log-in'>Log In</a>
				</div>
			)	
		}
	}

	render() {
		return(
			<div className='header'>
        <img src="../assets/logo.svg" className="logo" />
				<input type="search" className="search" />
				<img src='../assets/search.svg' alt="search-icon" className='search-icon' />
				{this.printLoginStatus()}
			</div>
		)
	}
}

export default Header;
