import React, { Component } from 'react';
import inventory from './products'

class SearchBar extends Component{
	render(){
		return(
			
			<form onSubmit={this.handleSubmit}>
          		<input id="searchTerm" type="text" placeholder="Category" />
          		<button type="submit" className="btn btn-default">Search</button>
			</form>

		)
	}
}

export default SearchBar;