import React from 'react';
import { Link, useParams } from 'react-router-dom';
import E404 from './E404';

import { observer } from 'mobx-react-lite';
import useStore from '../hooks/useStore';

export default observer(Product);

function Product(){

	let { id } = useParams();
	let [ productStore, cartStore ] = useStore('products', 'cart');
	let product = productStore.item(id);

	if(!/^[1-9]+\d*$/.test(id) || product === undefined){
		return <E404/>;
	}
	

	console.log(product);
		
	return <div>
		<h1>{product.title}</h1>
		<hr/>
		<div>
			<strong>Price: {product.price}</strong>
		</div>
		<hr/>
		<Link to="/">Back to catalog</Link>
		<hr/>
		{ cartStore.inCart(product.id) ? 
			<button onClick={() => cartStore.remove(product.id)} type="button" className="btn btn-danger">Remove from cart</button> :
			<button onClick={() => cartStore.add(product.id)} type="button" className="btn btn-success">Add to cart</button> 
		}
	</div>;
}