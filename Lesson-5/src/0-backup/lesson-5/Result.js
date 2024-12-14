import React from 'react';

import { observer } from 'mobx-react-lite';
import useStore from './hooks/useStore';

export default observer(function({ orderData }){
	let [cart] = useStore('cart');
	return <div>
		<h1>{orderData.name}, your order is done!</h1>
		<hr/>
		<strong>Total: {cart.total}</strong>
	</div>;
});