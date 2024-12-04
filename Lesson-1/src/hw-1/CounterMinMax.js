import React, { useState } from "react";
import PropTypes from "prop-types";

 function CounterMinMax({ min, max }){
  let [current, setCurrent] = useState(min);

  function applyCurrent(num){
    let validNum = Math.max(min, Math.min(max, num));
    setCurrent(validNum);
  }

  let incriment = () => applyCurrent(current + 1);
  let decriment = () => applyCurrent(current - 1);

  function changeValueNumber(e){
    let value = parseInt(e.target.value);
    applyCurrent(isNaN(value) ? min : max);

  }

  return <div>
    <button type="button" onClick={ decriment }>-</button>
    <input type="text" value={ current } onChange={ changeValueNumber }/>
    <button type="button" onClick={ incriment }>+</button>
  </div>
}

CounterMinMax.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}

export default CounterMinMax;

/*

let [current, setCurrent] = useState(min);

  function incriment(){
    if(current < max){
      setCurrent(current + 1);
    }
  }

  function decriment(){
    if(current > min){
      setCurrent(current - 1);
    }
  }

  return <div>
    <button type="button" onClick={ decriment }>-</button>
    <span>{ current }</span>
    <button type="button" onClick={ incriment }>+</button>
  </div>

 */

  /* HW-1 whith input */
  /*
   function CounterMinMax({ min, max }){
  let [current, setCurrent] = useState(min);

  function incriment(){
    if(current < max){
      setCurrent(current + 1);
    }
  }

  function decriment(){
    if(current > min){
      setCurrent(current - 1);
    }
  }

  function changeValueNumber(e){
    let value = e.target.value.replace(/[^0-9]/g, '');
    value = parseInt(value);
    if(value < min){
      setCurrent(min);
    } 
    else if(value > max){
      setCurrent(max);
    }
    else if(isNaN(value)){
      setCurrent(min);
    }
    else {
      setCurrent(value);
    }
    
    console.log(e.target.value);
  }

  return <div>
    <button type="button" onClick={ decriment }>-</button>
    <input type="text" value={ current } onChange={ changeValueNumber }/>
    <button type="button" onClick={ incriment }>+</button>
  </div>
}

CounterMinMax.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
}

export default CounterMinMax;


   */