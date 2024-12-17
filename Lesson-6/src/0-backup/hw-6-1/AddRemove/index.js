import React from 'react';


import { observer } from 'mobx-react-lite';
import useStore from '../hooks/useStore';

export default observer(AddRemove);

function AddRemove({ id }){
  let [ cartStore ] = useStore('cart');

  if(!cartStore.inCart(id)){
    return <div>
      <button type="button" className="btn btn-warning" onClick={() => cartStore.addToCart(id)}>Add to cart</button>
    </div>
  }
  else {
    return <div>
      <button type="button" className="btn btn-secondary" onClick={() => cartStore.removeFromCart(id)}>Remove from cart</button>
    </div>
  }
  
}

/**
 


 */