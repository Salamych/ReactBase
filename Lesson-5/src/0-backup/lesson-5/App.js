import React, { useState } from 'react'

import Cart from './Cart';
import Order from './Order';
import Result from './Result';

import SettingContext from './contexts/settings'

export default function(){
	/* settings */
	let [ settings, setSettings ] = useState({ lang: 'ru', theme: 'light' });

	/* router parody */
	let [ page, setPage ] = useState('cart');
	let moveToCart = () => setPage('cart');
	let moveToOrder= () => setPage('order');
	let moveToResult = () => setPage('result');

	
	/*order */
	let [ orderForm, setOrderForm ] = useState([
		{name: 'email', label: 'Email', value: '', valid: false, pattern: /^.+@.+$/},
		{name: 'phone', label: 'Phone', value: '', valid: false, pattern: /^\d{5,10}$/},
		{name: 'name', label: 'Name', value: '', valid: false, pattern: /^.{2,}$/},
	]);

	let orderData = {};
	
	orderForm.forEach(field => {
		orderData[field.name] = field.value;
	});

	let orderFormUpdate = (name, value) => {
		setOrderForm(orderForm.map(field => {
			if(field.name != name){
				return field;
			}
			
			let valid = field.pattern.test(value);
			return {...field, value, valid}
		}));
	}

	return <SettingContext.Provider value={settings}>
		<div className="container mt-1">
			{ page === 'cart' && 
				<Cart 
					onNext={moveToOrder} 
				/> 
			}
			{ page === 'order' && 
				<Order 
					fields={orderForm} 
					onChange={orderFormUpdate}
					onNext={moveToResult} 
					onPrev={moveToCart}  
				/> 
			}
			{ page === 'result' && 
				<Result 
					orderData={orderData}
				/> 
			}
			<hr/>
			<footer>
				<button type="button" onClick={() => setSettings({ ...settings, lang: 'ru' })}>ru</button>
				<button type="button" onClick={() => setSettings({ ...settings, lang: 'en' })}>en</button>
			</footer>
		</div>
	</SettingContext.Provider>;
}
