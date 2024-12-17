import React from 'react';

import { observer } from 'mobx-react-lite';
import useStore from '../hooks/useStore';

export default observer(function(){
	let [ cart, order ] = useStore('cart', 'order');
	return <div>
		<h1>{order.data.name}, your order is done!</h1>
		<hr/>
		<strong>Total: {cart.total}</strong>
	</div>;
});