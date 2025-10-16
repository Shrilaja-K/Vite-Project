import React, { useEffect } from 'react'
import { useState } from 'react';


const App = () => {
  
   const [num1, setnum1] = useState(100);
   const [num2, setnum2] = useState(1000);

   useEffect(()=>{
      setnum1(200);
      console.log("from useEffect");
      return ()=>{
        console.log("memory cleaned");
      }

   },[num1,num2]); 
  
  //  console.log("num1",num1);
  return (
    <div>
      <h1>{num1}</h1>
    <button onClick={() => setnum1((cur)=>cur+1)}>Add</button>
    <h1>{num2}</h1>
    <button onClick={() => setnum2((cur)=>cur+1)}>Add</button>
    </div>
  )
}

export default App