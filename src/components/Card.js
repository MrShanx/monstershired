import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
	constructor() {
		super();
		this.state = {
			class1: '',
			class2: '',
			class3: '',
		}
	}
	monsterClick = (event) => {
			this.setState({
				class1: 'speech-bubble',
				class2: 'arrow bottom right',
				class3: `${this.props.username}`,
			});
	}
	render() {
		return (
			<div 
				className='
					Monster-card 
					tc 
					hover-bg-black 
					dib 
					br3 
					pa3 
					ma2 
					grow 
					bw2'
				onClick={this.monsterClick}
			>
				<div className={`${this.state.class1}`}>
    				<div className={`${this.state.class2}`}></div>
    					{`${this.state.class3}`}
				</div>
				<img 
					alt='monster' 
					src={`https://robohash.org/${this.props.id}?set=set2`} 
					/>
				<div 
					className='Monster-info'
					onClick={this.monsterClick}
				>
					<h3>{this.props.name}</h3>
					<p>{this.props.email}</p>
				</div>
			</div>
		);
	}
}

export default Card;