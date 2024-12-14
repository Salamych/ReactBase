import React from 'react';

import { observer } from 'mobx-react-lite';
import useStore from './hooks/useStore';

export default observer(function({ orderData }){
	let [ cart, form ] = useStore('cart', 'form');
	return <div>
		<h1>{form.orderData.name}, your order is done!</h1>
		<hr/>
		<strong>Total: {cart.total}</strong>
	</div>;
});