
import React from 'react';

class Footer extends React.Component {
	constructor(props) {
		super(props);
		(props.type == "simple") ? this.state = { type: 'simple' } : this.state = { type: 'normal'}
		this.printFooter = this.printFooter.bind(this);
	}

	printFooter(type) {
		if(this.state.type == "simple") {
			return (
				<div class='footer-simple'>
						<img src='../assets/footer-icon.svg' />
						<p>	&copy; braket.ai, Inc.</p>
						<div class='footer-simple__buttons'>
							<a href=''>About</a>	
							<a href=''>Terms</a>	
							<a href=''>Privacy</a>	
							<a href=''>Docs</a>	
							<a href=''>API</a>	
							<a href=''>CLI</a>	
						</div>
				</div>
			)
		} else if (this.state.type == "normal") {
			return (
				// no clue how this looks yet. Design in progress.
				<div></div>
			)
		} else {
			console.log("Error: printFooter() argument is invalid");
			return (
				<div class='footer-simple'>
						<img src='../assets/footer-icon' />
						<p>	&copy; braket.ai, Inc.</p>
						<div class='footer-simple__buttons'>
							<a href=''>About</a>	
							<a href=''>Terms</a>	
							<a href=''>Privacy</a>	
							<a href=''>Docs</a>	
							<a href=''>API</a>	
							<a href=''>CLI</a>	
						</div>
				</div>
			)
		}
	}

	render() {
		return(
			<div>
				{this.printFooter()}	
			</div>
		)
	}
}


export default Footer;
