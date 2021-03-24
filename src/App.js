import React, {useEffect, useState} from 'react';
// import { useState } from 'react/cjs/react.development';
// import ComponentA from './ComponentA'
import Parent from './parent'
import SignUp from './Screen/SignUp'
import LogIn from './Screen/LogIn'


function App() {
  const [signup, setSignup] = useState(true)
  const [login, setLogin] = useState(false)
  //Assigment
// using state
// email = admin@domain.com
// Password = abc123
// Show login Successfull
// const tittle = "Log In"
// const [email, setEmail] = useState("admin@domain.com")
// const [userEmail, setUserEmail] = useState("")
// const [password, setPassword] = useState("abc123")
// const [userpassword, setUserPassword] = useState("")



  // const [user, setUser] = useState ("")
  // const [naam, setNaam] = useState(false)
  // const val = function(e){
  //   const input = e.target.value
  //   console.log(input)
    // setUser(input)

  //   const [text, setText] = useState("")
  //   const [list, setList] = useState([])
  //   const [item, setItem] = useState([])
  
  //   const Val = (e)=>{
  //     const input = e.target.value
  //     setText(input)
      
  //     // console.log(input)  
  //   }
  //   const addVlue = ()=>{
  //     console.log(text)
  //     list.push(text)
  //     setList(list) 
  //     const arra1 = [...list]
  //     setItem(arra1)

  //   }
    
    
    
    
  // // }
  // //  const getName = localStorage.getItem("UserName", user)
  // //  function show() {

  // //   const show = getName
  // //   console.log(show)
  // //   setNaam(true)
     
  // //  }
   
  // // const submit = function(){
  // //   console.log("State==>"+user)
  // //   localStorage.setItem("UserName", user)
  // // }
  //   // let number= 1;
  //   // const submit = function () {
  //   // }
  //   // const showValue = function () {
  //   //   console.log(userEmail)
  //   //   console.log(email)
  //   //   console.log(password)
  //   //   console.log(userpassword)
      
  //   // }
  //   // const emailValue = function(e){
  //   //   const input = e.target.value
  //   //   console.log(input)
  //   //   setUserEmail(input)
  //   // }

  //   // const passwordValue = function(e){
  //   //   const inputPassword = e.target.value
  //   //   console.log(inputPassword)
  //   //   setUserPassword(inputPassword)
  //   // }
  //   console.log(item)
  return (
    <div>
{/* 
  //     <input onChange={Val} value={text}/>
  //     <button onClick={addVlue}>add</button>

  //    <ol>
  //      {item.map((item)=>{
         return <li>{item}</li>
       })}
     </ol>
      
       { <h1>{tittle}</h1><br/>
       <input placeholder = "Email"onChange = {emailValue}/><br/><br/>
       <input placeholder = "Password"onChange = {passwordValue}/><br/><br/>
       <button onClick={(showValue)=> email === userEmail && password === userpassword? alert("Login Successfully"):alert("failed")}>Login</button> }


       { <input placeholder={Email}/> }


     { <input onChange={val}/>
    <button onClick={submit}>Submit</button>
   <button onClick={show}>Show</button>
     {naam ? <ul><li>{getName}</li></ul> :"" } }

       { <input placeholder="Email" onChange={inputValue}/>
     {<button>Submit</button>} 
   }

    
  //     { <Parent/> */}
  

    

     {signup ?<SignUp signup = {setSignup} login = {setLogin}/>:""}
      
     {login?<LogIn/>:""}
      

      

    


    </div>
  )


  }
  

export default  App
