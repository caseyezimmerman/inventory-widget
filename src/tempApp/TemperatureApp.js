import React, {Component} from 'react';
import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput'


// two utility functions that are not a part of the Component
// they are just regular JS function
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}


// try convert is going to take care of when the user enters something that isnt a Number
// it expects connvert to be a function
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}


class TemperatureApp extends Component{
	constructor(){
		super();
		this.state = {
			temperature: ''
		}
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
		this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
	}

	handleCelsiusChange(value){
		console.log("Someone changed celsius input"+ value)
	}

	handleFahrenheitChange(value){
		console.log('someone changed fahrenheit input'+ value)
	}



	render(){
		// var temperature = this.state.temperature
		console.log(tryConvert('100', toCelsius))
		return(
			<div>
				<TemperatureInput scale='f' onChange={this.handleFahrenheitChange}/>
				<TemperatureInput scale='c' onChange={this.handleCelsiusChange}/>
				
			</div>
		)
	}
}

export default TemperatureApp;