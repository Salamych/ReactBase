import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { observer } from 'mobx-react-lite';
import useStore from '../hooks/useStore';

export default observer(Product);

function Product(){

	let params = useParams();
	console.log(params)
	// params.id -> store.products get by id
		
	return <div>
		<h1>1</h1>
	
		<hr/>
		
	</div>;
}