import React from 'react';
import {Modal, Button} from 'react-bootstrap';

import { Link, useNavigate } from 'react-router-dom';

import { observer } from 'mobx-react-lite';
import useStore from '../hooks/useStore';

export default observer(function(){
	const navigate = useNavigate();

	let [orderStore] = useStore('order');
	let [ showModal, setShowModal ] = React.useState(false);
	let [ confirmed, setConfirmed ] = React.useState(false);
	let openModal = () => setShowModal(true);
	let closeModal = () => setShowModal(false);
	let sendForm = () => {
		setConfirmed(true);
		orderStore.data(); 
		closeModal();
	}
	let onExited = () => {
		if(confirmed){
			navigate("/result");
		}
	}

	return <div>
		<h1>Input data</h1>
		<hr/>
		<form>
			{orderStore.form.map(field => (
				<div className="form-group" key={field.name}>
					<label>{field.label}</label>
					<input
						type="text"
						className={`form-control ${field.value.length && !field.valid ? 'border border-danger' : ''}`}
						name={field.name}
						value={field.value}
						onChange={e => orderStore.update(field.name, e.target.value.trim())}
					/>
				</div>
			))}
		</form>
		<hr/>
		<Link to="/" className="btn btn-warning">Back to cart</Link>
		<button type="button" className="btn btn-success" onClick={openModal} disabled={!orderStore.formValid}>Send</button>
		<Modal show={showModal} onHide={closeModal} onExited={onExited}>
			<Modal.Header closeButton>
				<Modal.Title>Check data</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				<p>Data value</p>
			</Modal.Body>

			<Modal.Footer>
				<Button variant="secondary" onClick={closeModal}>Close</Button>
				<Button variant="primary" onClick={sendForm}>Ok, send!</Button>
			</Modal.Footer>
		</Modal>
	</div>;
})