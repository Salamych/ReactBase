import React, { useEffect, useState } from 'react';
import MinMax from './MinMax';


export default function({ onNext, products, onChange, onRemove, onTotal }){

	let total = products.reduce((accum, el) => {return accum + (el.price*el.cnt)},0);
	useEffect(() => {
		onTotal(total);
	}, [total])
	
	return <div>
		<h1>Cart</h1>
		<hr/>
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
								<MinMax min={1} max={pr.rest} current={pr.cnt} onChange={cnt => onChange(pr.id, cnt)} />
							</td>
							<td>{ pr.price*pr.cnt }</td>
							<td>
								<button type="button" onClick={ () => onRemove(pr.id) }>X</button>
							</td>
							<td>
								<button type="button" onClick={ () => onChange(pr.id, pr.rest) }>MAX</button>
							</td>
						</tr>
					)) }
				</tbody>
			</table>
		<hr/>
		<strong>Total: { total } </strong>
		<hr/>
		<button type="button" className="btn btn-primary" onClick={onNext}>Move to order</button>
	</div>;
}

