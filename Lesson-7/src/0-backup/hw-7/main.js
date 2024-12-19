// import './tests/store-cart'

import React from 'react'
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import StoreContext from './contexts/store';
import RootStore from './store';

const store = new RootStore();
store.products.load();
store.cart.load();

ReactDom.render(
	<BrowserRouter>
		<StoreContext.Provider value={store}>
			<App/>
		</StoreContext.Provider>
	</BrowserRouter>,
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
