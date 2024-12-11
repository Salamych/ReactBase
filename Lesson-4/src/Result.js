import React from 'react';

export default function({ products, orderData }){
	let total = products.reduce((sum, pr) => sum + pr.price * pr.cnt, 0);
	return <div>
		<h1>{orderData.name}, your order is done!</h1>
		<hr/>
		<strong>Total: {total}</strong>
	</div>;
}