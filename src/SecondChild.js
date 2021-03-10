import React from 'react'
function SecondChild(props){
    console.log(props)
    return(
        <div>
            <h1>Second array</h1>
            {props.arra2.map(function(item){
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
export default SecondChild