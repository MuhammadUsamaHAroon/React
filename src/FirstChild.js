import React from 'react'

function FirstChild(props){
    console.log(props)
    return(
        <div>
            <h1>First Array</h1>
          {props.arra1.map(function(item){
              return(
                  <ul>
                      <li>{item.user}</li>
                      <li>{item.age}</li>
                  </ul>
              )
          })}
               
        </div>
    )
}
export default FirstChild