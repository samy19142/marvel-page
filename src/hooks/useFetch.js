import { useEffect } from "react";
import { useState } from "react";


const useFetch=(url,options)=>{

const [result,setResult]= useState(null);
const [loading, setloading]= useState(true);
const [error,setError]= useState(null);


useEffect(() => {
   const  dato= async()=>{
    try{
        const res = await fetch(url,options);
        const json = await res.json();
        setResult(json);
        setloading(false);
    } catch(err){
        setError(err);
        setloading(false);
    }
   }

   dato();

}, [options,url]);


return {loading,result,error}
  

};


export default useFetch;