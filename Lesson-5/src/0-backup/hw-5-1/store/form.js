import { makeAutoObservable } from 'mobx';

export class Form{
  forms = [
		{name: 'email', label: 'Email', value: '', valid: false, pattern: /^.+@.+$/},
		{name: 'phone', label: 'Phone', value: '', valid: false, pattern: /^\d{5,10}$/},
		{name: 'name', label: 'Name', value: '', valid: false, pattern: /^.{2,}$/},
	];

  get orderData(){
    let orderData = {};
	
    this.forms.forEach(field => {
      orderData[field.name] = field.value;
    });
    return orderData;
  }
 
  update = (name, value) => {
		this.forms = this.forms.map(field => {
			if(field.name != name){
				return field;
			}
			
			let valid = field.pattern.test(value);
			return {...field, value, valid}
		});
	}

  constructor(){
    makeAutoObservable(this);
  }
}

export default new Form();