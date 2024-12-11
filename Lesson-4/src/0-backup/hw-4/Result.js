import React from 'react'


export default function({goToCart, total, products, forms}){
	console.log(forms)

	return <div>
		<h1>Dear {forms[0].value}</h1>
		<h2>An email has been sent to your {forms[1].value}  address</h2>
		<hr/>
		<strong>You bought:</strong>
		{products.map(el => (
			<div key={el.id}>{el.title} - {el.cnt} piece(s)</div>
		))}
		<hr/>
		<strong>Total cost : {total}</strong>
		<hr/>
		<button type="button" className="btn btn-warning" onClick={goToCart}>Back to cart</button>
		<hr/>
		<h2>Thank you for your purchase!</h2>
	</div>;
}

