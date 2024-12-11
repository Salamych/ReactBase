import React, { useState } from 'react'

import Cart from './Cart';
import Order from './Order';
import Result from './Result';

import SettingContext from './context/settings';

export default function(){
	/* settings */
	let [ settings, setSettings ] = useState({ lang: 'ru', theme: 'light'})

	/* router parody */
	let [ page, setPage ] = useState('cart');
	let moveToCart = () => setPage('cart');
	let moveToOrder = () => setPage('order');
	let moveToResult = () => setPage('result');

	/* products */

	let [ products, setProducts ] = useState(productsStub());
	let [ total, setTotal ] = useState();
	
	let setProductCnt = (id, cnt) => {
		setProducts(products.map(pr => pr.id != id ? pr : ({ ...pr, cnt })));
	}

	let rmProd = (id) => {
		setProducts(products.filter(pr => pr.id != id));
	}

	/* Order */

	let [ forms, setForms ] = useState(getArrForm());

	function changeValue(id, value){
		setForms(forms.map(item => item.id != id ? item : ({...item, value})));
	}

	function changeValid(id, isValid){
		setForms(forms.map(item => item.id != id ? item : ({...item, isValid})));
	}

	function showMsg(){
		setForms(forms.map(item => ({...item, notShowMsg: item.notShowMsg})));
	}

	function showMsgForId(id, notShowMsg){
		setForms(forms.map(item => item.id != id ? item : ({...item, notShowMsg})));
	}

	

	return <SettingContext.Provider value={settings}> 
	<div className={`${settings.theme == 'dark' ? 'bg-dark text-light' : 'bg=light' }`}>
	<div className={`container mt-1`}>
		{ page === 'cart' && 
			<Cart 
				onNext={moveToOrder}  
				products={products}
				onChange={setProductCnt}
				onTotal={setTotal}
				onRemove={rmProd}
			/>
		}
		{ page === 'order' && 
			<Order 
				onNext={moveToResult} 
				onPrev={moveToCart}
				forms={forms}
				onChange={changeValue}
				onValid={changeValid}
				onShowMsg={showMsg}
				onShowMsgForId={showMsgForId}
			/>
		}
		{ page === 'result' && 
			<Result 
				products={products} 
				goToCart={moveToCart}
				total={total}
				forms={forms}
			/>
		}

		<hr/>
		<footer>
			<button type="button" onClick={() => setSettings({...settings, lang: 'ru'})}>ru</button>
			<button type="button" onClick={() => setSettings({...settings, lang: 'en'})}>en</button>
			<hr/>
			<button type="button" onClick={() => setSettings({...settings, theme: 'light'})}>light</button>
			<button type="button" onClick={() => setSettings({...settings, theme: 'dark'})}>dark</button>
		</footer>
	</div>
	</div>
	</SettingContext.Provider>
}

function productsStub(){
	return [
		{
			id: 100,
			title: 'Ipnone 200',
			price: 12000,
			rest: 10,
			cnt: 1
		},
		{
			id: 101,
			title: 'Samsung AAZ8',
			price: 22000,
			rest: 5,
			cnt: 1
		},
		{
			id: 103,
			title: 'Nokia 3310',
			price: 5000,
			rest: 2,
			cnt: 1
		},
		{
			id: 105,
			title: 'Huawei ZZ',
			price: 15000,
			rest: 8,
			cnt: 1
		}
	];
}

function getArrForm(){
	return [
		{
			id: 'userName',
			label: 'Name',
			value: '',
			type: 'text',
			pattern: /.+/,
			msg: 'Хотя бы один символ',
			notShowMsg: true,
			isValid: false
		},
		{
			id: 'userEmail',
			label: 'Email',
			value: '',
			type: 'email',
			pattern: /^.+@.+\..+$/,
      msg: 'Email вида sometext@mail.ru',
			notShowMsg: true,
			isValid: false
		},
		{
			id: 'userPhone',
			label: 'Phone',
			value: '',
			type: 'phone',
			pattern: /^\d{7,14}$/,
      msg: 'Только цифры, количество цифр от 7 до 14',
			notShowMsg: true,
			isValid: false
		}
	];
}