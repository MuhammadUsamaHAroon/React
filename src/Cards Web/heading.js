import React from 'react'
import './style.css'

const Heading = (props) => {
    console.log(props)
    return (
        <div className= "titleName">
            <span><b>{props.titleNaam}</b></span>
            </div>
    )
}

export default Heading
