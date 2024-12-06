import React, { useState } from 'react'
import MinMax from './MinMax';
import ProductCard from './ProductCard';
import ModalCard from './ModalCard';


export default function(){
	let [ products, setProducts ] = useState(productsStub());
	let [ showModal, setShowModal ] = useState(false);

	let total = products.reduce((accum, el) => {return accum + (el.price*el.cnt)},0);
	let setCnt = (id, cnt) => {
		setProducts(products.map(pr => pr.id != id ? pr : ({ ...pr, cnt })));
	}

	let rmProd = (id) => {
		console.log(id)
		setProducts(products.filter(pr => pr.id != id));
	}

	return <div className="some container mt-1">
		<h1>Products list</h1>
		<table>
			<tbody>
				<tr>
					<th>#</th>
					<th>Title</th>
					<th>Price</th>
					<th>Cnt</th>
					<th>Total</th>
				</tr>
				{ products.map((pr, i) => (
					<tr key={pr.id}>
						<td>{ i + 1 }</td>
						<td>{ pr.title }</td>
						<td>{ pr.price }</td>
						<td>
							<MinMax min={1} max={pr.rest} current={pr.cnt} onChange={cnt => setCnt(pr.id, cnt)} />
						</td>
						<td>{ pr.price*pr.cnt }</td>
						<td>
							<button type="button" onClick={ () => rmProd(pr.id) }>X</button>
						</td>
						<td>
							<button type="button" onClick={ () => setCnt(pr.id, pr.rest) }>MAX</button>
						</td>
					</tr>
				)) }
				<tr>
					<th colSpan={4}></th>
					<th>
					{ total }
					</th>
				</tr>
			</tbody>
		</table>
		<hr/>
		<ProductCard />
		<hr/>
		<ModalCard 
			showed={showModal} 
			onClose={() => setShowModal(true)}
			onVisible={() => setShowModal(false)} 
		/>
	</div>;
}

function productsStub(){
	return [
		{
			id: 100,
			title: 'Ipnone 200',
			price: 12000,
			rest: 10,
			cnt: 1
		},
		{
			id: 101,
			title: 'Samsung AAZ8',
			price: 22000,
			rest: 5,
			cnt: 1
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 2,
			cnt: 1
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 8,
			cnt: 1
		}
	];
}

/* 
let setCnt = (id, cnt) => {
	let newProducts = [ ...products ];
	let productInd = products.findIndex(pr => pr.id == id);
	let newProduct = { ...products[productInd] };
	newProduct.cnt = cnt;
	newProducts[productInd] = newProduct;
	setProducts(newProducts);
} */

/*

function fn(i, ev){

}

let elems = document.querySeelctorAll('some');

elems.forEach((el, i) => {
	el.addEventListener('click', e => fn(i, e))

});


*/