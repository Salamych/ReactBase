import React from 'react';
import MinMax from '../MinMax';
import { Link } from 'react-router-dom';

import { observer } from 'mobx-react-lite';
import useStore from '../hooks/useStore';

export default observer(Cart);

function Cart(){
	let [cartStore, productStore] = useStore('cart', 'products');
	let { items: products, total, change, removeFromCart } = cartStore;
	
		
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
					<th>Action</th>
				</tr>
				{ products.map((pr, i) => (
					
					<tr key={pr.id}>
						<td>{ i + 1 }</td>
						<td>{ productStore.productById(pr.id).title }</td>
						<td>{ productStore.productById(pr.id).price }</td>
						<td>
							<MinMax min={1} max={productStore.productById(pr.id).rest} current={pr.cnt} onChange={cnt => change(pr.id, cnt)} />
						</td>
						<td>{ productStore.productById(pr.id).price * pr.cnt }</td>
						<td>
							<button type="button" onClick={() => removeFromCart(pr.id)}>X</button>
							<button type="button" onClick={() => change(pr.id, productStore.productById(pr.id).rest)}>MAX</button>
						</td>
					</tr>
				)) }
			</tbody>
		</table>
		<hr/>
		<strong>Total: { total }</strong>
		<hr/>
		{products.length > 0 ? 
		<Link to="/order"className="btn btn-primary">Move to order</Link>
		: <Link to="/"className="btn btn-secondary">Back to main</Link>
	}
	</div>;
}