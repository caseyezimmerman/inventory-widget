// Import stuff other people made
import React, {Component} from 'react'

// we are making a new componnent. this component is a class,
// but also a subclass of the React, Component
class SearchBar extends Component{
	constructor(){
		super();
		// this.state = {
		// 	searchTerm: ''
		// }
		this.handleChange = this.handleChange.bind(this)
	}


	handleChange(event){
		console.log("blah")
		this.props.onChange(event.target.value);
	}


	// every component must have a render method
	render(){
		const searchTerm = this.props.searchTerm
		return(
			<form className="search-bar">
				<input value={searchTerm} onChange={this.handleChange} type="text" placeholder="Search..." />
				<div>
					<input id="in-stock" type="checkbox" /> Only show products in stock
				</div>
			</form>
		)
	}
}



// must export so that we can import in app.js
export default SearchBar