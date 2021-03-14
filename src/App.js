import React, {useState} from 'react';
// import { useState } from 'react/cjs/react.development';
// import ComponentA from './ComponentA'
import Parent from './parent'

function App() {
  const [user, setUser] = useState ("")
  const [naam, setNaam] = useState(false)
  const val = function(e){
    const input = e.target.value
    console.log(input)
    setUser(input)
    
    
  }
   const getName = localStorage.getItem("UserName", user)
   function show() {

    const show = getName
    console.log(show)
    setNaam(true)
     
   }
   
  const submit = function(){
    console.log("State==>"+user)
    localStorage.setItem("UserName", user)
  }
    // let number= 1;

  return (
    <div>

    <input onChange={val}/>
    <button onClick={submit}>Submit</button>
    <button onClick={show}>Show</button>
    {naam ? <ul><li>{getName}</li></ul> :"" }
      {/* <Parent/> */}
      {/* <h1>Hello I am  App</h1> */}

      {/* <ComponentA/> */}


    </div>
  )


  }
  

export default  App;
