import { makeAutoObservable } from 'mobx'

export default class Cart{
  items = [
		{id: 100, cnt: 3},
		{id: 101, cnt: 1}
	];


  get total(){
    return this.items.reduce((sum, pr) => sum + this.rootStore.products.productById(pr.id).price * pr.cnt, 0);
  }

	get inCart(){
		return id => this.items.some(item => item.id == id);
  }

  change = (id, cnt) => {
    // let product = this.products.find(pr => pr.id == id);

    // if(product !== undefined){
    //   product.cnt = Math.max(1, Math.min(product.rest, cnt));
    // }
  }

  remove = (id) => {
		//this.products = this.products.filter(pr => pr.id !== id);
	}

  addToCart = (prId) => {
    let product = {id: prId, cnt: 1};
    this.items.push(product);
  }

  removeFromCart = (id) => {
      this.items = this.items.filter(f => f.id !== id);  
  }


  constructor(rootStore){
    makeAutoObservable(this);
		this.rootStore = rootStore;
  }
}

/*
get inCart(){
		return id => this.items.some(item => item.id == id);
}

*/