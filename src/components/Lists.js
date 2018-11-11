import React from 'react'; 
import List from './List';
const Lists = (props) => {
	return(
		<div>
	{
			props.games.map((sahil, index) => <List key={index} hasindex={index} hasGames={sahil} />)
	}
	</div>
	)
}

export default Lists;