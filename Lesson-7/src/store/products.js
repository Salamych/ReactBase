import { makeAutoObservable, runInAction } from 'mobx'

export default class Products{
  products = [];

	item(id){
		return this.products.find(pr => pr.id == id);
	}

	async load(){
		let response = await fetch('http://faceprog.ru/reactcourseapi/products/all.php');
		let products = await response.json();
		runInAction(() => {
			this.products = products;
		});
	}

  constructor(rootStore){
    makeAutoObservable(this);
		this.rootStore = rootStore;
  }
}



