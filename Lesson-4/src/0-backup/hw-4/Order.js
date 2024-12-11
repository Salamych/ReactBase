import React, { useState } from 'react';
import InputForm from './InputForm';
import BModal from 'react-bootstrap/Modal';


export default function({ onPrev,	onNext,	forms, onChange, onValid, onShowMsg, onShowMsgForId }){
	let [ showBoots, setShowBoots ] = useState(false);

	function goNext(){
		let errArr = [];
		let isErrorVal = true;
		
		forms.forEach(el => {
			console.log(el.notShowMsg)
			if(!el.pattern.test(el.value)){
				errArr.push(el.msg);
				onShowMsg();
			}else{
				onShowMsgForId(el.id, true);
			}
		});

		if(errArr.length == 0){
			isErrorVal = false;
		}

		if(!isErrorVal){
			setShowBoots(true)
		}
	}

	return <div>
		<h1>Input data</h1>
		<hr/>
		<form>
			{forms.map((el) => ( 
			<div key={el.id}>
				<InputForm 
					id={el.id} 
					label={el.label} 
					value={el.value} 
					type={el.type} 
					msg={el.msg}
					isValid={el.isValid}
					pattern={el.pattern}
					onChange={(value) => onChange(el.id, value)}
					onValid={(valid) => onValid(el.id, valid)}
					notShowMsg={el.notShowMsg}
					onShowMsgForId={(notShow) => onShowMsgForId(el.id, notShow)}
				/>				
			</div>
		  ))}
			
		</form>
		<hr/>
		<button type="button" className="btn btn-warning" onClick={onPrev}>Back to cart</button>
		<button type="button" className="btn btn-primary" onClick={goNext}>Buy</button>
		<BModal show={showBoots} onHide={() => setShowBoots(false)}>
				<BModal.Header>
					Attention
				</BModal.Header>
				<BModal.Body>
					<p>Are you agree buy this things?</p>
				</BModal.Body>
				<BModal.Footer>
					<button type="button" className="btn btn-warning" onClick={onPrev}>Reset</button>
					<button type="button" className="btn btn-primary" onClick={onNext}>Ok</button>
				</BModal.Footer>
			</BModal>
	</div>;
}
