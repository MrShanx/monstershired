import React from 'react';
import Card from './Card.js';

const CardList = ({ monsters }) => {
	return (
		<div>
			{
				monsters.map((user) => {
					return (
						<Card 
							key={user.id} 
							id={user.id} 
							name={user.name} 
							email={user.email}
							username={user.username} 
						/>
					);
				})	
			}	
		</div>
	);
}

//export only 1
export default CardList;