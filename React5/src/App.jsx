import React ,{useState} from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import Functionclick from './Functionclick';
import Classclick from './Classclick';

const App = () => {
  // const [input, setInput] = useState("");
  // const inputRef=useRef();
  // console.log("Rendering")
  // useEffect(()=>{
  //   inputRef.current=input;
  // },[input]);
  // const display=()=>{
  //   console.log(inputRef.current)
  // };

  return (
    <div>
      {/* <h4>Input</h4>
      <input
      type="text"
      value={input}
      onChange={(event)=>setInput(event.target.value)}
      ></input>
      <p>MY name is {input}</p>
      <p>My name is {inputRef.current}</p>
      <button onClick={display}>Show Input</button> */}
      <Functionclick/>
      <Classclick/>
    </div>
    
  )
}
export default App
