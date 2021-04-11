import React, { useEffect, useState} from 'react';
// import { useState } from 'react/cjs/react.development';
// import SignUp from './Screen/SignUp/index'
// import LogIn from './Screen/LogIn/index'
import Router from '../src/config/Router'
// import learn from './Components/FunctionalComponent';
// import Quiz from '../src/Screen/Quiz/index'
// import Learn from './Components/FunctionalComponent'
import Question from './Screen/Questions/index'







function App(){
 
  
    return(
      <div>

    
      
      
     
     <Router/>
     {/* <Learn name = "Usama"/>
     <Learn Father = "Haroon" />
     <Learn age = "19">
       <p>This is Children</p>
       <button>Hello</button>
     </Learn>
     <Learn class = "Inter"/> */}
     
      <Question/>

      </div>
    )
  }

  

export default  App
