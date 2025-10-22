import React,{useEffect} from 'react'
import { useState } from 'react'

function StatehookCounter() {
        const[count,setCount]=useState(0);
  return (
    <div>
        <button onClick={()=>{ setCount (count+1)}}>Count - {count}</button>
    </div>
  )
}

export default StatehookCounter