import React from 'react'
import Cards from "./Cards Web/cards"
import image from "../src/Asset/images/671083.jpg"
import Data from "./Cards Web/data"



const App = () => {
    
    
  
    
    return (

        <div>
        
        

    
          <div className= "header"><h1>top five netfilix series </h1></div>
          
          
          {Data.map((val, index)=>{
              {console.log(val, index)}
              return(

            <Cards 
                key= {val.id}
                imgsrc = {val.image}
                seriesName = {val.name}
                titleName = {val.title}
                buttonLink = {val.link}
         />
              )
         })}
         
            
            

        
        </div>
    )
}

export default App
