import { makeAutoObservable, runInAction } from 'mobx';

const BASEURL = 'http://faceprog.ru/reactcourseapi/cart/';

export default class Cart{
  items = [];
  #token = null;

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

  add = async(id) => {
    if(!this.inCart(id)){
      let response = await fetch(`${BASEURL}add.php?token=${this.#token}&id=${id}`);
		  let res = await response.json();

      if(res){
        this.items.push({id, cnt: 1});
      }
    }
  }

  remove = async (id) => {
    if(this.inCart(id)){
      let response = await fetch(`${BASEURL}remove.php?token=${this.#token}&id=${id}`);
		  let res = await response.json();

      if(res){
		    this.items = this.items.filter(item => item.id != id);
      }
	  }
  }

  load = async() => {
    let curToken = this.rootStore.storage.getItem('CART_TOKEN');
		let response = await fetch(`${BASEURL}load.php?token=${curToken}`);
		let { cart, token, needUpdate } = await response.json();
    
    if(needUpdate){
      this.rootStore.storage.setItem('CART_TOKEN', token);
    }

    runInAction(() => {
      this.items = cart;
      this.#token = token;
    });

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