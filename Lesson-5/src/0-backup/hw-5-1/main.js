// import './tests/store-cart'

import React from 'react'
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import StoreContext from './contexts/store';
import cartStore from './store/cart';
import formStore from './store/form';

const store = {
	cart: cartStore,
	form: formStore
}

ReactDom.render(
	<StoreContext.Provider value={store}>
		<App/>
	</StoreContext.Provider>,
	document.querySelector('.app')
);


// import React from 'react'
// import ReactDom from 'react-dom';

// import Result from './Result';
// import StoreContext from './contexts/store';

// const orderData = {name: 'Test'};
// const store = {
// 	cart: {total: 100000}
// }

// ReactDom.render(
// 	<StoreContext.Provider value={store}>
// 		<Result orderData={orderData}/>
// 	</StoreContext.Provider>,
// 	document.querySelector('.app')
// );
