import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Cart from './views/Cart';
import Order from './views/Order';
import Result from './views/Result';
import E404 from './views/E404';
import Home from './views/Home';
import Product from './views/Product';

import useStore from './hooks/useStore';
import { observer } from 'mobx-react-lite';


export default observer(function(){
let [ cartStore ] = useStore('cart');
console.log(cartStore.items)
	return <>
		<header>
			<div className="container mt-1">
				<div className="row justify-content-between">
					<div className="col">
						Logo
					</div>
					<div className="col">
						In cart: { cartStore.items.length }
						<br/>
						<strong>Total: { cartStore.total }</strong>
					</div>
				</div>
				<hr/>
			</div>
		</header>
		<div>
			<div className="container">
				<div className="row">
					<aside className="col col-3">
						<ul className="list-group">
							<li className="list-group-item"><Link to="/">Home</Link></li>
							<li className="list-group-item"><Link to="/cart">Cart</Link></li>
							<li className="list-group-item"><Link to="/order">Order</Link></li>
						</ul>
					</aside>
					<main className="col col-9">
						<Routes>
							<Route path="/" element={<Home />}/>
							<Route path="/product/:id" element={<Product />}/>
							<Route path="/cart" element={<Cart />}/>
							<Route path="/order" element={<Order />}/>
							<Route path="/result" element={<Result />}/>
							<Route path="*" element={<E404 />}/>
						</Routes>
					</main>
				</div>
			</div>
		</div>
		<footer className="mt-1">
			<hr/>
			<div className="container mt-1">2024</div>
		</footer>
	
	</>

})
