import React, {useState} from 'react'
import './style.css'


function SignUp(){

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [conPass, setConPass] = useState('')

    const nameInput = (e)=>{
      const input = e.target.value
      setName(input)

    }
    const emailInput = (e)=>{
        const input = e.target.value
        setEmail(input)
  
      }
      const passInput = (e)=>{
        const input = e.target.value
        setPassword(input)

        
  
      }
      const conPassInput = (e)=>{
        const input = e.target.value
        setConPass(input)
  
      }

      const nextButton = ()=>{
          console.log(name)
          console.log(email)
          console.log(password)
          console.log(conPass)
          
      }

    return(

        <div id = "container">
        <div id = "backgColour">
            <div id = "main-one">
        <div className = "Header">
        <h1>SignUp</h1>
        </div>
            <div>
                <input onChange = {nameInput} placeholder = "Name" className = "InputName"/>
            </div>
            <div>
                <input onChange = {emailInput} placeholder = "Email" className = "InputEmail"/>
            </div>
            <div>
                <input onChange = {passInput} placeholder = "Password" className = "InputPass"/>
            </div>
            <div>
                <input onChange = {conPassInput} placeholder = "Confirm Password" className = "ConfirmPass"/>
            </div>
            </div>
            <div id = "main-two">
                <div ><button onClick = {nextButton} className = "NextButton">Next</button> </div>
            </div>

            </div>
        </div>
    )
}
export default SignUp