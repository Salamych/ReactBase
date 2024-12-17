import React from 'react';
import E404 from './E404';
import AddRemove from '../AddRemove';

import { Link, useParams } from 'react-router-dom';

import { observer } from 'mobx-react-lite';
import useStore from '../hooks/useStore';

export default observer(Product);

function Product(){

	let params = useParams();
	let [ productStore ] = useStore('products');
	let { productById } = productStore;
	let product = productById(params.id)
	// params.id -> store.products get by id
	if(product ===undefined){
		return <><E404/></>
	}
	else {
		return <div>
		<h1>${ product.title }</h1>
		<hr/>
		<strong>${ product.price }</strong>
	
		<hr/>
		<AddRemove id={product.id}/>
	</div>;
	}	
	
}