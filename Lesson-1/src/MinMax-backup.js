import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types';

MinMax.propTypes = {
	min: PropTypes.number,
	max: PropTypes.number.isRequired,
	current: PropTypes.number.isRequired,
	onChange: PropTypes.func.isRequired
}

function MinMax({ min = 1, max, current, onChange }){

	let inp = useRef(); 

	

	function keyUp(e){
		if(e.key === "Enter"){
			parseCurrentStr(e);
		}	
	}
	
	function parseCurrentStr(){
		let num = parseInt(inp.current.value);
		applyCurrent(isNaN(num) ? min : num);
	}

	function applyCurrent(num){
		let validNum = Math.max(min, Math.min(max, num));
		inp.current.value = validNum;
		onChange(validNum);
	}

	let inc = () => applyCurrent(current + 1);
	let dec = () => applyCurrent(current - 1);

	useEffect(()=>{
		inp.current.value = current;
	},[current])

	return <div>
		<button className='btn btn-warning' type="button" onClick={ dec }>-</button>
		<input ref={inp} type="text" defaultValue={ current } onBlur={parseCurrentStr} onKeyUp={keyUp}/>
		<button className='btn btn-success' type="button" onClick={ inc }>+</button>
	</div>
}

export default MinMax;