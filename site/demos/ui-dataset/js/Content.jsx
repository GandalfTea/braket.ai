
import React from 'react';
import { Card, ReadMe, Snippet } from './ContentCard';
import { Button } from './General';

class Content extends React.Component {
	constructor(props) {
		super(props);
		this.state = { pageDisplay: "ReadMe" };
		this.displayPage = this.displayPage.bind(this);
		this.updateState = this.updateState.bind(this);
	}
	
	updateState(update) {
		this.setState({ pageDisplay: update});
	}
	
	displayPage(page) {
		// maybe do information sanity check before display?
		switch (page) {
			case "ReadMe":
				return <ReadMe />
			case "Snippet":
				return <Snippet />
		/*	case "Code":
				return <Code />
			case "Issues":
				return <Issues />
			case "Discussion":
				return <Discussion /> */
			default:
				console.log("ERROR: Content displayPage failed to update: bad argument. ");
				return <ReadMe />
		}
	}

	render() {
		return (
			<div className="content">
				<div className="content-buttons">
					<Button type='none' text="Description" clicked={ (this.state.pageDisplay === "ReadMe") ? true : false } onClick={ this.updateState.bind(this, "ReadMe")} />	
					<Button type='none' text="Data Snippet" clicked={ (this.state.pageDisplay === "Snippet") ? true : false } onClick={ this.updateState.bind(this, "Snippet")} />	
					<Button type='none' text="Code" clicked={ (this.state.pageDisplay === "Code") ? true : false } onClick={ this.updateState.bind(this, "Code")} />	
					<Button type='none' text="Issues" clicked={ (this.state.pageDisplay === "Issues") ? true : false } onClick={ this.updateState.bind(this, "Issues")} />	
					<Button type='none' text="Discussion" clicked={ (this.state.pageDisplay === "Discussion") ? true : false } onClick={ this.updateState.bind(this, "Discussion")} />	
				</div>
				{ this.displayPage(this.state.pageDisplay) }
			</div>
		)
	}
}


export default Content;
