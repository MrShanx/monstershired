import React from 'react';
import './searchbox.css';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className="pa2">
			<input 
				className="
					pa3 
					ba 
					b--black 
					bg-dark-gray 
					near-white"
				type="search" 
				placeholder="search monsters" 
				onChange={searchChange}
			/>
		</div>
	)
}

export default SearchBox;