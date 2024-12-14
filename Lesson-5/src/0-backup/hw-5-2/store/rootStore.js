import { Cart } from "./cart";
import { Form } from "./form";

export class RootStore{
  constructor(){
    this.cartStore = new Cart(this);
    this.formStore = new Form(this);
  }
}

export default new RootStore();