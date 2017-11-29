import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import inventory from './products'
import Table from './table'
import SearchBar from './search'
import Electronics from './electronics'


class App extends Component {
  constructor(props){
    // App is a subclass of component, therefore we must include a super
    super(props);
    this.state = {
      category: []
    }
  }

 
  handleSubmit(event){
    var value=document.getElementById("searchTerm").value
    event.preventDefault();
    console.log("clicked")
  }

  render() { 
    
    return (
      <div className="App">
        <SearchBar />
        <h3>Sporting Goods</h3>
        <Table />
        <h3>Electronics</h3>
        <Electronics />
      </div>
    );
  }
}


export default App;
