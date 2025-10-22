import React,{useState} from 'react'

function Statehookcounter3() {

   const [name,setName]=useState({firstname:'',lastname:''});

  return (
    <div>
        <form>
            <input type='text'value={name.firstname} onChange={e=>setName({...name,firstname:e.target.value})}/>
            <input type='text' value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}/>
            <h2>Your Firstname is : {name.firstname}</h2>
            <h2>Your Lastname is : {name.lastname}</h2>
        </form>
    </div>
  )
}

export default Statehookcounter3