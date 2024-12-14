import React from 'react';

import { observer } from 'mobx-react-lite';
import StoreContext from './contexts/store';

export default observer(function(){
	let stores = React.useContext(StoreContext);
	let { cartStore: cart, formStore: form } = stores.root;
	return <div>
		<h1>{form.orderData.name}, your order is done!</h1>
		<hr/>
		<strong>Total: {cart.total}</strong>
	</div>;
});