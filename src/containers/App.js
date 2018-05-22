import React, { Component } from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/searchbox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	//react LC function
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchfield: '',
		};
	}
	//react LifeCycle function
	//make server fetch() requests on DidMount()
	//built in react function, no es6 arrow function syntax
	componentDidMount() {
		//fetch online REST service for fake placeholder data
		fetch('https://jsonplaceholder.typicode.com/users')
  		.then(response => response.json())
  		.then(users => this.setState({monsters: users}));
	}
	//function for searchbox action
	//arrow functions syntax (ES6), since custom function
	onSearchChange = (event) => {
		this.setState({searchfield: event.target.value,
		});
	}
	//react LifeCycle function
	render() {
		const { monsters, searchfield } = this.state;
		const monstersFiltered = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchfield.toLowerCase());
		});
		//if REST server request takes a long time to load hundreds of user data
			//create and mount LOADING... bar
		return !monsters.length ? //0 = false, !0 = true -> loading header
		<h1 className='tc dark-red'>Loading...</h1> :
		(
			<div className='page tc'>
				<h1 className=''>Monsters 4 Hire</h1>
				<Searchbox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList monsters={monstersFiltered}/>
				</Scroll>
			</div>
		);
		}
	}

export default App;