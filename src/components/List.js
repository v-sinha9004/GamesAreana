import React from 'react'; 

export default class List extends React.Component {
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div>		 
		  		<div className="sinha">	
		  					<h3>{this.props.hasGames.title}</h3>
							<p>{this.props.hasGames.platform}</p>
					<div className="genre">
						<p>Genre: {this.props.hasGames.genre}</p>
						<p className="inline">{this.props.hasGames.score}</p>
			 		</div>
			 	</div>   
		 </div>
		);
	}
};