import React,{useState,useEffect,useRef} from 'react'

function Refhooktimer() {

    const [timer,setTimer]=useState(0);
    const intervalref=useRef();

    useEffect (()=>{
        intervalref.current=setInterval(()=>{
           setTimer(prevTimer => prevTimer+1)
        },1000)
        return()=>{
            clearInterval(intervalref.current)
        };
    },[])

  return (
    <div>
        Refhooktimer - {timer}
        <button onClick={()=>clearInterval(intervalref.current)}>Clear Timer</button>
    </div>
  )
}

export default Refhooktimer