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
    let item = this.items.find(pr => pr.id == id);

    if(item !== undefined){
      item.cnt = Math.max(1, Math.min(this.rootStore.products.productById(id).rest, cnt));
    }
  }

  remove = (id) => {
		this.item = this.items.filter(pr => pr.id !== id);
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