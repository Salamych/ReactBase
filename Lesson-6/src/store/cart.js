import { makeAutoObservable } from 'mobx'

export default class Cart{
  items = [
		{id: 100, cnt: 3},
		{id: 101, cnt: 1}
	];

  get itemsDetailed(){
    return this.items.map(item => {
      let details = this.rootStore.products.item(item.id);
      return {...details, ...item};
    })
  }

  get total(){
		return this.itemsDetailed.reduce((sum, pr) => sum + pr.price*pr.cnt, 0);
  }

	inCart(id){
		return this.items.some(item => item.id == id);
	}

  change = (id, cnt) => {
    let item = this.items.find(item => item.id == id);

    if(item !== undefined){
      let details = this.itemsDetailed.find(item => item.id == id);
      item.cnt = Math.max(1, Math.min(details.rest, cnt));
    }
  }

  add = (id) => {
    if(!this.inCart(id)){
      this.items.push({id, cnt: 1});
    }
  }

  remove = (id) => {
		this.items = this.items.filter(item => item.id != id);
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