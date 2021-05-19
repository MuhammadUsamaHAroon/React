import React from 'react'
import "./style.css"
import Images from './images'
import Heading from './heading'


const Cards = (props) => {
    // console.log(props)
    
    return (
        <div className= "container">
        
        <div className= "setOne">
        <div className= "card">
        

         <Images imgsrc= {props.imgsrc}/>
        
      <div className= "cardName">  <span className= "serName">{props.seriesName}</span></div>
         <Heading titleNaam= {props.titleName}/>
        <div className= "button">
        <a href= {props.buttonLink}>
            <button className= "cardbutton">WATCH NOW</button>
            </a></div>
        

        

        </div>

        <div className= "card">
        

         <img className= "cardImage" src={props.imgsrc} />
        
      <div className= "cardName">  <span className= "serName">{props.seriesName}</span></div>
     <div className= "titleName">  <span ><b>{props.titleName}</b></span></div>
        <div className= "button">
        <a href= {props.buttonLink}>
            <button className= "cardbutton">WATCH NOW</button>
            </a></div>
        

        

        </div>


        <div className= "card">
        

         <img className= "cardImage" src={props.imgsrc} />
        
      <div className= "cardName">  <span className= "serName">{props.seriesName}</span></div>
     <div className= "titleName">  <span ><b>{props.titleName}</b></span></div>
        <div className= "button">
        <a href= {props.buttonLink}>
            <button className= "cardbutton">WATCH NOW</button>
            </a></div>
        

        

        </div>



        </div>
            
        </div>
    )
}

export default Cards
