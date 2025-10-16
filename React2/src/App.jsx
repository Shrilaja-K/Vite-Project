import React, { useState } from "react";
 const App= () =>{
  const [num,setnum]=useState(1);
  let x=1;
 
const handleadd = () =>{
  setnum((curvalue)=>{
    return curvalue+1;
  });
};
console.log(num);
 return (
  <div>
    <h1>{num}</h1>
    <button onClick={handleadd}>Add</button>
  </div>
 );
};
export default App