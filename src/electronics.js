import React, { Component } from 'react';
import inventory from './products'

class Electronics extends Component{
	
	render(props){		
		var productsArray = inventory.data.map((inventory)=>{
			if(inventory.category === "Electronics"){
				var inStockClass
				if(inventory.inStock == true){
					inStockClass="green"
				}else{
					inStockClass = "red"
				console.log(inStockClass)
				}

			return(
			<div>

				<table className="table table-striped">
					<thead>
						<tr>
						  <th scope="col"></th>
						  <th scope="col"></th>
						</tr>
					</thead>
					<tbody>
						<tr>
						  <td><div className="col-sm-3" id={inStockClass}>{inventory.name}</div></td>
						  <td><div className="col-sm-9">{inventory.price}</div></td>
						</tr>

					</tbody>
				</table>
			</div>

				// <div>
				// 	<div className="col-sm-1" id={inStockClass}>{inventory.name}</div>
				// 	<div className="col-sm-11">{inventory.price}</div>
				// </div>
				)
		}
		})
		return (productsArray)
		
		


	}
}

export default Electronics;