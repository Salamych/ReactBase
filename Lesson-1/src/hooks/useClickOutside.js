import { useEffect } from "react";


export default function(ref, callback){

  useEffect(() => {
    let getCalback = (e) => {
      console.log(ref)
      if(!ref.current.contains(e.target)) callback()
    };

    window.addEventListener('mousedown', getCalback);
    window.addEventListener('touchstart', getCalback);
    

    return ()=> {
      window.removeEventListener('mousedown', getCalback);
      window.removeEventListener('touchstart', getCalback);
    };

  }, [ref, callback])
}