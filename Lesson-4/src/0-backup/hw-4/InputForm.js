import React, { useEffect, useRef, useState } from 'react'


export default function({ id, value, label, type, msg, pattern, onChange, onValid, notShowMsg, onShowMsgForId }){


  let inpRef = useRef();

  function goValue(){
    let res = inpRef.current;
    onChange(res.value);
  }

  function isValidRes(){
		if(!pattern.test(inpRef.current.value)){
			onValid(false);
      onShowMsgForId(false);
		}
		else{
			onValid(true);
      onShowMsgForId(true);
		}
    
	}

  useEffect(() => {
    inpRef.current.value = value;
  }, [value])

	return (
    <>
      <label htmlFor={id}>{label}</label><br/>
      <input
        ref={inpRef}
        id={id}
        defaultValue={value}
        onInput={goValue} 
        onBlur={isValidRes}
        type={type}  
      />
      {!notShowMsg && <div className='text-danger'>{msg}</div>}      
    </>
  );
}


