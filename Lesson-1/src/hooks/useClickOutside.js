import { useEffect } from "react";


export default function(ref, callback){

  useEffect(() => {
    let getCalback = (e) => {
      console.log(ref)
      if(!ref.current.contains(e.target)) callback()
      };
    window.addEventListener('click', getCalback);

    return ()=> window.removeEventListener('click', getCalback);

  }, [ref, callback])
}