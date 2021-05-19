import React from 'react'
import './style.css'

const Images = (props) => {
    return (
        <div>
            <img src= {props.imgsrc} className= "cardImage"/>
        </div>
    )
}

export default Images
