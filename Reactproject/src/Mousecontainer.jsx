import React from 'react'
import Effecthookcounter2 from './Effecthookcounter2'

function Mousecontainer() {
    const[display,setDisplay]=React.useState(true);
  return (
    <div>
        <button onClick={()=>setDisplay(!display)}>Toggle display</button>
        {display && <Effecthookcounter2 />}
    </div>
  )
}

export default Mousecontainer