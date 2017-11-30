import React, {Component} from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureApp from './TemperatureApp';

class TemperatureInput extends Component{
	constructor(props){
		super();
		this.state = {
			temperature: ''
		}
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event){
		this.props.onChange(event.target.value);
	}

	render(){
		const temperature = this.props.temperature
		return(
			<div>
				<legend>Scale: {this.props.scale}</legend>
				<input value={temperature} onChange={this.handleChange} />
				<BoilingVerdict temperature={parseFloat(this.cTemp)} />
			</div>
		)
	}
}

export default TemperatureInput;