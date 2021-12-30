
import React from 'react';
import { render } from 'react-dom';
import news from '../news.json';
import { Button } from './General';
import Vote from './Vote'

// move to general ?
const Notification = (props) => {
	return(
		<div className="simple-notification">
			<p className="simple-notification-message">{props.message}</p>
		</div>
	)
}

const ContributionUpdate = (props) => {
	var message = []
	message.push( <p className="contibution-update__main">Contribution {props.result}</p>)
	message.push( <p className="contibution-update__ticket">{props.ticket}</p>)

	return(
		<Notification message={message} />
	)
}


const MessagePrompt = (props) => {
	return(
		<div>
			<div className="message-body">
				<div className="message-body__title">
					<h3>{props.title}</h3>
					<p>{props.author}</p>
				</div>
				<p>{props.message}</p>
			</div>
			<input type="text" classNam="message-input" />
		</div>
	)
}


// New Comment on Own Post Prompt


// move this to General
const Comment = (props) => {
	const level = props.level;
	return(
		<div className= { "comment " + level } >
			<div className="line-body">
				<div className="comment-body">
					<h3>{props.author}</h3>
					<p>{props.message}</p>
				</div>
			</div>
			<button className="comment-reply"> Reply </button>
		</div>
	)
}


const  CommentPrompt = (props) => {
	var stack = []
	var current_level = props.level;
	const comments = props.comments;
	for( var idx = 0; idx < comments.length; idx++) {
		stack.push(<Comment level={current_level} author={comments[idx].author} 
								message={comments[idx].message} score={comments[idx].score} />)
		if(comments[idx].replies != "none"){
			if( Array.isArray(comments[idx].replies)){
				stack.push(CommentPrompt({comments: comments[idx].replies, level: current_level + 1})) // why on all hell does this now work with increment
			} else {
				stack.push(<Comment level={current_level + 1} author={comments[idx].replies.author} 
										message={comments[idx].replies.message} score= {comments[idx].replies.score} />)
			}
		}
	}

	if (current_level === 1) {
		return(
			<div>
				<div className="comment-prompt__original-message">
					<h3>{props.original}</h3>
					<p> by you </p>
				</div>
				{stack}
			</div>
		)
	} else {
		return stack;
	}
}

const RequestPrompt = (props) => {
	return(
		<div className="request">
			<h3>{props.title}</h3>
			<p>{props.message}</p>
			<div> 
				<p>{props.entries} requests</p>
				<p>Task: {props.task}</p>
				<p>Deadline: {props.deadline}</p>
			</div>
			<Button type="full" text="Accept" />
			<Button type="outline" text="Decline" />
		</div>
	)
}





class Landing extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isLoggedIn: false, news: false };

	}
	
	getNews() {
		// contact server and get news JSON
		return 0;
	}

	checkLogin() {
		// check if the person is logged in by browser storage
		return 0;
	}

	render() {
		var news_ui = []
		for( const i of news.news){
			console.log(i.type)
			if( i.type === "contribution-update") {
				news_ui.push( <ContributionUpdate result={i.result} ticket={i.ticket} />)
			} else if ( i.type === "message") {
				news_ui.push( <MessagePrompt title={i.title} author={i.author} message={i.message} />)
			} else if ( i.type === "comment") {
				news_ui.push( <CommentPrompt level={1} original={i.original} comments={i.replies} />)
			} else if ( i.type === "request") {
				news_ui.push( <RequestPrompt title={i.workforce} message={i.message} entries={i.entries} task={i.task} deadline={i.deadline} />)
			}
		}


		return(
			<div>
      	<img src="" alt="avatar" className="avatar" />;
				<h3>Hello, username</h3>
     	  <input type="search" className="search" />
				<h3>While you were gone</h3>
				{news_ui}
			</div>
		)
	}
}

render(<Landing />, document.getElementById('landing'));
