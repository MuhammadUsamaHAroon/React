import React from 'react'
// import { useHistory } from "react-router-dom";
import './style.css'



function Quiz(){
    // let history = useHistory();
    return(
        <div id = "contaner">
            
            <div className = "heaDER"><p className = "heading">QUIZ CATEGORIES</p></div>
            <div className = "searchBar">
                <input placeholder = "Search Quizes" className = "searchInput"/>
            </div>
            <div id = "parentHalf"><div  className = "firstHalf">
              
              <div ><button className = "firstButton">VueJs</button> </div>
              <div><button className = "secButton">VueJs</button></div>
              <div ><button className = "thirdtButton">CSS</button> </div>
              <div><button className = "fourthButton">VueJs</button></div>
              <div ><button className = "fifthButton">VueJs</button> </div>
              
            </div>
            <div className = "secondHalf">

            <div ><button className = "firstButton">JAVAsCRIPT</button> </div>
              <div><button className = "secButton">JAVAsCRIPT</button></div>
              <div ><button className = "thirdtButton">JAVAsCRIPT</button> </div>
              <div><button className = "fourthButton">JAVAsCRIPT</button></div>
              <div ><button className = "fifthButton">JAVAsCRIPT</button> </div>

            </div>
            </div>
            
        </div>
    )
}
export default Quiz