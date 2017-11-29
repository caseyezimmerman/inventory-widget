// This will be a 'dumb' component
// we still need to import react but we don't need to import component
// its not going to be a class but react still needs to make it a component

import React from 'react'

function ProductCategoryRow(props){
	return(
		<tr>
			<th>{props.header}</th>
		</tr>
	)
}

export default ProductCategoryRow;