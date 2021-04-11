import React, {useState} from 'react'
// import Button from '../../Components/Button'
import './style.css'
import { useHistory } from "react-router-dom";



function LogIn(){
    let history = useHistory();

    const [loginName, setLoginName] = useState("")
    const [loginEmail, setLoginEmail] = useState("")
    const [loginPass, setLoginPass] = useState("")

    const nameLogin = (e)=>{
        const input = e.target.value
        setLoginName(input)

    }

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

        history.push("/Quiz");
       
    }
    
    const registerEmail = localStorage.getItem('UserEmail')
    console.log(registerEmail)
    const registerPass = localStorage.getItem('UserPass')
    console.log(registerPass)

    // const move = ()=>{
    //     history.push("/SignUp");
    // } 
    const Go = ()=>{
        history.push("/SignUp");
    }

    
    return(

        <div id = "Container">
            <div id = "Backg">
            <div id = "mainOne">

       <div className = "header"><h1>LogIn</h1></div>



       <div><input placeholder = "E-mail"onChange = {emailLogin} className = "inputEmail" /></div>

       <div> <input placeholder = "Password"onChange = {passLogin}  className = "inputPass"/></div>

        </div>
        <div id = "mainTwo">

        <button onClick = {(login)=>registerEmail===loginEmail && registerPass===loginPass ?alert("Login SuccessFully")
        :alert("InCorrect Password")} id = "LogButton">LogIn</button>
        {/* <button onClick = {move} >Text</button> */}
        <p  className = "string">if you dont have acount click here</p>
        <a className = "link" onClick = {Go} href = "">Register Here</a>
        
        
        </div>

        </div>
        
        </div>




    )
}
export default LogIn