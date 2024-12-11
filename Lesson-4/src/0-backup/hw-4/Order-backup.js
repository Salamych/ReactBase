import React, { useEffect, useRef, useState } from 'react'


export default function({ onPrev,	onNext,	forms, onChange, onValid }){
	
	// let arrForm = [
	// 	{
	// 		id: 'userName',
	// 		label: 'Name',
	// 		value: name,
	// 		type: 'text',
	// 		pattern: /.+/,
	// 		msg: 'Хотя бы один символ',
	// 		inp: inpName,
	// 		change: onChangeName,
	// 		isValid: true
	// 	},
	// 	{
	// 		id: 'userEmail',
	// 		label: 'Email',
	// 		value: email,
	// 		type: 'email',
	// 		pattern: /^.+@.+\..+$/,
  //     msg: 'Email вида sometext@mail.ru',
	// 		inp: inpEmail,
	// 		change: onChangeEmail,
	// 		isValid: true
	// 	},
	// 	{
	// 		id: 'userPhone',
	// 		label: 'Phone',
	// 		value: phone,
	// 		type: 'phone',
	// 		pattern: /^\d{7,14}$/,
  //     msg: 'Только цифры, количество цифр от 7 до 14',
	// 		inp: inpPhone,
	// 		change: onChangePhone,
	// 		isValid: true
	// 	}
	// ];

/*
let setProductCnt = (id, cnt) => {
		setProducts(products.map(pr => pr.id != id ? pr : ({ ...pr, cnt })));
	}
*/

	function changeValue(id, value, callBack){
		callBack(value);
		console.log(value);
		setForms(forms.map(item => item.id != id ? item : ({...item, value})));
		console.log(forms);
		
	}


	

	function getNext(){
		let errArr = [];
		let isError = false;

		// inpRefList.forEach((el, i) => {
		// 	let pattern = forms[i].pattern;
		// 	console.log(item)
		// 	if(!pattern.test(item.value)){
		// 		item.setAttribute('data-valid', false);
		// 		//setForms([...forms, forms[i].isValid = false])
		// 		errArr.push(item.msg)
		// 		console.log(arrForm)
		// 	}else{
		// 		item.setAttribute('data-valid', true);
		// 		//setForms([...forms, forms[i].isValid = true])
		// 	}
		// });

		

		
		if(errArr.length == 0){
			isError = false;
		}

		if(!isError){
			onNext();
		}
	}

	function goValue(e){
		let el = e.target;
		onChange( el.id, el.value)
		isValid(e);
	}

	function isValid(e){
		let el = e.target;
		let inp = forms.filter(item => item.id == el.id);
		let pattern = inp[0].pattern;
		let value = el.value;
		if(!pattern.test(value)){
			onValid(el.id, false);
		}
		else{
			onValid(el.id, true);
		}
	}
	
	let formRef = useRef();
	console.log(formRef)

	return <div>
		<h1>Input data</h1>
		<hr/>
		<form ref={formRef}>
			{forms.map((el) => ( 
			<div key={el.id}>
				<label htmlFor={el.id}>{el.label}</label><br/>
				<input
					defaultValue={el.value}
					onBlur={goValue} 
					type={el.type} 
					id={el.id}
				/>
				{!el.isValid && <div className='text-danger'>{el.msg}</div>}
				
			</div>
		  ))}
			
		</form>
		<hr/>
		<button type="button" className="btn btn-warning" onClick={onPrev}>Back to cart</button>
		<button type="button" className="btn btn-primary" onClick={getNext}>Buy</button>
	</div>;
}


/*
 let patterns ={
    notEmpty: { 
      reg: /.+/,
      msg: 'Хотя бы один символ'
    },
    phone: {
      reg: /^\d{7,14}$/,
      msg: 'Только цифры, количество цифр от 7 до 14'
    },
    email: {
      reg: /^.+@.+\..+$/,
      msg: 'Email вида sometext@mail.ru'
    }
  };
if(!pattern.test(el.value)){
        el.classList.add('err');
        errorList.innerHTML += `<p>${msg}</p>`
        err = true;
      }
 */