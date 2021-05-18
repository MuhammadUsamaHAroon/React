import React, {useState} from 'react'
import  './style.css'

function Questions() {
     const Ques = [{
         question:"Q#1: JAVAsCRIPT is a ______ language",
         OptionA:"Pragramming",
         OptionB:"English",
         OptionC:"Markup",
         OptionD:"Computer"
     }]

     
    const value = (e)=>{
         const input = e.target.value
         console.log(input)
        
         
    }

    return (
       
        
        <>
        <h1>MCQ's</h1>
        <div>
           {Ques.map(item=>(
               <div>
               
               <p>{item.question}</p>
               <span>{item.OptionA}</span>
               <input type = "radio" value = {item} onClick = {value} name = "radiovalues"/><br/>
               {Ques.values()}
               <span>{item.OptionB}</span>
               <input type = "radio" value = {item} onClick = {value} name = "radiovalues"/><br/>
               <span>{item.OptionC}</span>
               <input type = "radio" value = {item} onClick = {value} name = "radiovalues"/><br/>
               <span>{item.OptionD}</span>
               <input type = "radio" value = {item} onClick = {value} name = "radiovalues"/>
               </div>
           ))}
           

            </div>
            
            <div>
            <p>Q#2: JAVAsCRIPT is a ______ language</p>
            <span>Pragramming</span>
            <input type = "radio" value = "Pragramming"/><br/>
            <span>English</span>
            <input type = "radio" value = "English"/><br/>
            <span>Markup </span>
            <input type = "radio" value = "Markup"/><br/>
            <span>Computer</span>
            <input type = "radio" value = "Computer"/>

            </div>
            
            
        </>
    )
}

export default Questions
