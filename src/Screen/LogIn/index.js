import React, {useState} from 'react'
import Button from '../../Components/Button'



function LogIn(){

    const [loginEmail, setLoginEmail] = useState("")
    const [loginPass, setLoginPass] = useState("")

    const emailLogin = (e)=>{
        const input = e.target.value
        setLoginEmail(input)

    }
    const passLogin = (e)=>{
        const input = e.target.value
        setLoginPass(input)
    }

    const login = ()=>{
        console.log(loginEmail)
        console.log(loginPass)
       
    }

    const registerEmail = localStorage.getItem('UserEmail')
    console.log(registerEmail)
    const registerPass = localStorage.getItem('UserPassword')
    console.log(registerPass)
    

    
    return(

        <>
       {<h1>LogIn</h1>}

        <input placeholder = "E-mail"onChange = {emailLogin} /><br/><br/>

        <input placeholder = "Password"onChange = {passLogin} /><br/><br/>

        <button onClick = {(login)=>registerEmail===loginEmail && registerPass===loginPass ?alert("Login SuccessFully")
        :alert("InCorrect Password")}>Login</button>

        
        
        </>




    )
}
export default LogIn