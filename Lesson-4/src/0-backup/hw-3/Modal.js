import React, { useRef } from "react";
import useClickOutside from "./hooks/useClickOutside";

export default function({ showed, title, onClose }){
 
  let classes = ['alert', 'alert-success'];

  if(!showed){
    classes.push('d-none');
  }

  let root = useRef();
  
  useClickOutside(root, function(){
    if(showed){
      onClose();
    }
  });

  return (
    <div className={classes.join(' ')} ref={root}>
      <h2>{ title }</h2>
      <hr/>
      <button type="button" className="btn btn-success" onClick={onClose}>Ok</button>
    </div>
  );
}