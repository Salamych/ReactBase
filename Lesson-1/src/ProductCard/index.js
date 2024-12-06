import React from "react";
import style from './style.module.css';
import useWindowSize from "../hooks/useWindowSize";

export default function(){
  let { width } = useWindowSize();
  console.log(width);

  let paddingSize = Math.min(parseInt(width / 200), 5);
  let classNames = `card p-${paddingSize}`;
  console.log(classNames);

  return <div className={ classNames }>
    <h2>Product card</h2>
    <input className={style.inp} type="text"/>
  </div>
}