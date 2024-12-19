import React from 'react';
import { Link } from 'react-router-dom';

import { observer } from 'mobx-react-lite';
import useStore from '../hooks/useStore';

export default observer(Home);

function Home(){
	let [ productsStore, cartStore ] = useStore('products', 'cart');
	let {products} = productsStore;
		
	return <div>
		<h1>Catalog</h1>
		<hr/>
		<div className="row">
			{products.map(pr => (
				<div className="col col-4 mb-3 mt-3" key={pr.id}>
					<div className="card">
						<div className="card-body">
							<h3>{ pr.title }</h3>
							<div>{ pr.price }</div>
							<Link to={`/product/${pr.id}`}>Read more</Link>
							{cartStore.inCart(pr.id) ? 1 : 0}
							<hr/>
							{cartStore.inCart(pr.id) ? 
								<button 
								onClick={() => cartStore.remove(pr.id)} 
								type="button" 
								className="btn btn-danger"
								disabled={cartStore.inProccess(pr.id)}
								>Remove from cart</button> :
								<button 
								onClick={() => cartStore.add(pr.id)} 
								type="button" 
								className="btn btn-success"
								disabled={cartStore.inProccess(pr.id)}
								>Add to cart</button> 
							}
						</div>
					</div>
				</div>
			))}
		</div>
		<hr/>
		
	</div>;
}