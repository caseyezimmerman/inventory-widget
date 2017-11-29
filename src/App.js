import React, {Component} from 'react';
import './App.css';
import products from './products'
import ProductTable from './ProductTable'
import SearchBar from './SearchBar'
import Electronics from './electronics'


class App extends Component {
  render() { 
    
    return (
      <div className="App container">
        <SearchBar />
        <ProductTable />
      </div>
    );
  }
}


export default App;