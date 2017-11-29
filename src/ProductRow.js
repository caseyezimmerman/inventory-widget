// this will be a presentation componnet
// no need for state, just for html purposes

import React from 'react';

function ProductRow(props){
	// must ave return statement
	var productClass = "";
	if(props.item.inStock === true){
		productClass = 'text-success'
	}else{
		productClass = 'text-danger'
	}
	return(
		<tr>
			<td className={productClass}>{props.item.name}</td>
			<td>{props.item.price}</td>
		</tr>
	)
}

export default ProductRow;