import React from 'react';
import sortBy from 'sort-by';
import Header from './Header';
import Sorting from './Sorting';
import Search from './Search';
import Lists from './Lists';
import List from './List';

export default class GamesArena extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			games: [],
			games1:[]

		}
	}

componentDidMount(){	
	return(
			fetch('http://starlord.hackerearth.com/gamesext').then(results => {
		  return results.json();
		}).then(data => {
				 this.setState({games: data});
				 this.setState({games1: data});
		})
	)
}


		onUpdateGames(term){
			if(term){
				const array=[];
					console.log(term);
					this.state.games1.map((vishal) => {
							if(vishal.title.toString().indexOf(term) !== -1){
									array.push(vishal);
							}
					})
							this.setState({games: array})
				}
			
		}

		sortAscending = ()=> {
		const array3=this.state.games.sort(sortBy('score'))
			console.log(array3);
			this.setState({games:array3})
		}


		sortDesending = ()=> {
		const array4=this.state.games.sort(sortBy('-score'))
			console.log(array4);
			this.setState({games:array4})
		}

	render() {
		return(
			<div>
				<Header />
				<Search onSearchTermChange={term=> this.onUpdateGames(term)} auto={this.state.games}/>
				<Sorting sortAscending={this.sortAscending} sortDesending={this.sortDesending} />	
				<Lists games={this.state.games} />
			</div>
		);
	}
};