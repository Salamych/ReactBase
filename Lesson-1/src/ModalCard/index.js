import React, { useEffect, useRef } from "react";
import style from './style.module.css';
import useClickOutside from "../hooks/useClickOutside";

export default function({showed, onClose, onVisible}){
  let card = useRef();
  let btn = useRef();
  useClickOutside(card, function(){
    if(showed){
      removeModal();
    }
  });

  function getModal(){  
    if(card.current.classList.contains(style.active) && showed){ 
      removeModal();   
    }else {
      onClose();
      btn.current.innerText = 'Close';  
      card.current.classList.add(style.active);
    }
  }


  function removeModal(){
    onVisible()
    btn.current.innerText = 'More';
    card.current.classList.remove(style.active);
  }
  return (
    <div className={style.card} >
      New modal
      <div className={style['btn-more']}>
        <button ref={btn} className={style.btn} onClick={getModal}>More</button>
      </div>
      <div ref={card} className={style['modal-window']}>
        modal window
        <a href="#">hello</a>
      </div>
    </div>
  );
}