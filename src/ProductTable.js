import React, {Component} from 'react';
import products from './products';
import ProductCategoryRow from './ProductCategoryRow'
import ProductRow from './ProductRow';


class ProductTable extends Component{
	constructor(){
		super();
		this.products = products
		this.state = {
			productsByCategory: {}
		}
	}

	componentDidMount(){
		this.formatData();
	}

	formatData(){
		var tempProducts = {};
		this.products.data.map((product)=>{
			console.log(product.category)
			if(tempProducts[product.category] === undefined){
				tempProducts[product.category] = []
			}
			tempProducts[product.category].push(product)
		});
		console.log(tempProducts)
		this.setState({
			productsByCategory: tempProducts
		})
	}

	render(){
		var rows = [];
		// outter 'for' loop is going throuhg categories (sporting goods and electronics)
		// it will run as many times as there are categories
		for(var key in this.state.productsByCategory){
			console.log(key)
			rows.push(<ProductCategoryRow key={key} header={key} />)

			// not we need an internal map through the categories
			// map through THIS category
			this.state.productsByCategory[key].map((item,index)=>{
				rows.push(<ProductRow key={item.name} item={item} />)
			});
		}
		return(
			<div className='product-table'>
				<table className="table table-striped">
					<thead>
						<tr>
							<th>Name</th>
							<th>Price</th>
						</tr>
					</thead>
					<tbody>
					{rows}
					</tbody>
				</table>
			</div>
		);
	};
};

export default ProductTable;
