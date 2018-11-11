import React from 'react'; 

export default class Search extends React.Component {
	constructor(props){
		super(props);

		this.state = {term: ''}
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}

	render(){
		const array1=[];
		return(
			<div className="float-left">
				<input
				placeholder="Search(By Name)"
				value={this.state.term}
				onChange ={event => this.onInputChange(event.target.value)} />
				<p>{this.props.auto.length} results found</p>
			</div>
		);
	}
}
