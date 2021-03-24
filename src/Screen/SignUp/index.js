import React, {useState} from 'react'
import Btton from '../../Components/Button'



function SignUp(props){
// console.log(props)
    const [userEmail, setUserEmail] = useState("")
    const [userPass, setUserPass] = useState("")

    const email = (e)=>{
        const inp = e.target.value
        
        setUserEmail(inp)

    }
    const password = (e)=>{
      const input = e.target.value 
      setUserPass(input)

    }
    const signup = ()=>{
      localStorage.setItem('UserEmail', userEmail)
        // console.log(userEmail)
        localStorage.setItem('UserPassword', userPass)
        // console.log(userPass)
        props.signup(false)
        props.login(true)

    }


    return(
        <>
        {<h1>Sign Up</h1>}
        <input placeholder = "E-mail" onChange={email}/><br/><br/>

        <input placeholder = "Password"onChange = {password} /><br/><br/>
        
        <button onClick={signup}>SignUp</button><br/><br/>

        
    
        </>
    )
}
export default SignUp