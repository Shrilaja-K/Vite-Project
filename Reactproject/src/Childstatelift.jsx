import React, { Component } from 'react'

const Childstatelift = (props)=>{
    const greet="Good Morning";
    return(
        <>
        <h2>Hello</h2>
        <button onClick={()=>{props.func(greet);}}>Update</button>   
        </>
    )
}
export default Childstatelift;