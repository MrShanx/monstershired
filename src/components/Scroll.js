import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ 
				overflowY: 'scroll',
				border: '5px solid black',
				boxShadow: '0px 0px 5px 5px black inset',
				height: '500px' 
			}}>
			{props.children}
		</div>
	);
};

export default Scroll;