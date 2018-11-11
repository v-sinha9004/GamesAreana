import React from 'react';

const Sorting =(props) => (

	<div>
		<p>Sort By Score: </p>
		<button onClick={props.sortAscending}>Asc</button>
		<button onClick={props.sortDesending}>Dsc</button>
	</div>

);

export default Sorting;
