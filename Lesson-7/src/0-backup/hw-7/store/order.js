import { makeAutoObservable } from 'mobx'

export default class Order{

	form = [
			{name: 'email', label: 'Email', value: '', valid: false, pattern: /^.+@.+$/},
			{name: 'phone', label: 'Phone', value: '', valid: false, pattern: /^\d{5,10}$/},
			{name: 'name', label: 'Name', value: '', valid: false, pattern: /^.{2,}$/},
	];

	lastOrderCache = {
		name: null,
		total: 0
	}

	get formValid(){
		return this.form.every(f => f.valid);
	}

	data = () => {

		let res = {};
		this.form.forEach(field => {
			res[field.name] = field.value;
		});

		this.lastOrderCache.name = res.name;
		this.lastOrderCache.total = this.rootStore.cart.total;

		this.rootStore.cart.clean();
	}

	
	
	update = (name, value) => {
		let field = this.form.find(f => f.name == name);

		if(field !== undefined){
			field.value = value.trim();
			field.valid = field.pattern.test(field.value);
		}
	}

	send(){
		// fetch
		/*
		let form = {
			...data,
			cart: this.rootStore.cart.products
		}

		fetch('/api/order/', {
			method: 'POST',
			body: form
		})
		*/
	}
  
  constructor(rootStore){
    makeAutoObservable(this);
		this.rootStore = rootStore;
  }
}



