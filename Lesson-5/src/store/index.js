import Cart from "./cart";
import Order from "./order";

export default class RootStore{
  constructor(){
    this.storage = window.localStorage;

    this.cart = new Cart(this);
    this.order = new Order(this);
  }
}

/*
class FakeRootStore{
  this.storage = {setItem(), getItem()};
  this.cart = new Cart(this);
  this.order = {};
}
*/