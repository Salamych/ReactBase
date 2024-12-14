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

	

	return <SettingContext.Provider value={settings}>
		<div className="container mt-1">
			{ page === 'cart' && <Cart onNext={moveToOrder} /> }
			{ page === 'order' && <Order onNext={moveToResult} onPrev={moveToCart}/> }
			{ page === 'result' && <Result /> }
			<hr/>
			<footer>
				<button type="button" onClick={() => setSettings({ ...settings, lang: 'ru' })}>ru</button>
				<button type="button" onClick={() => setSettings({ ...settings, lang: 'en' })}>en</button>
			</footer>
		</div>
	</SettingContext.Provider>;
}
