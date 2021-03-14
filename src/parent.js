import React, {useState} from 'react'
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'
import OffBulb from "./Asset/images/OIP.jpeg"
import OnBulb from "./Asset/images/yellow_bulb.png"

const arrObj1 = [{user:"Arshaq",age:25},{user:"Areeb",age:20},{user:"Arif",age:22}]
const arrObj2 = [{user:"Junaid",age:25},{user:"jawwad",age:20},{user:"Addel",age:22}]
// console.log(arrObj1

function Parent(){
    // let title1 = "MY Name is Usama"
    // let title2 = "My Name is Ammar"
    // const [bulb, setBulb] = useState(false)
    const [count, setCount]=useState(0)

    function IncreamentCount(){
        setCount(count + 1)
    }

    function DecreamentCont(){
    //    var zeroLimit = count>=0
        // if(count===0){
        //     alert("Sorry!!")
        // }
        setCount(count - 1)
        
    }


    
    

    return(
    
        
        <>
           
           {/* <button onClick={IncreamentCount}>Increament</button>
           <span>{count}</span>
           <button onClick={DecreamentCont}>Decreament</button> */}
            {/* <FirstChild arra1={arrObj1}/
            <SecondChild arra2={arrObj2} /> */}

            {/* <h1>{bulb === true ? <img style={{width:"15.5%"}} src={OnBulb} alt="Image not found" />:""}</h1>
            <h1>{bulb === false?<img style={{width:"20%"}} src={OffBulb} alt="Image not found"/>:"" }</h1>
            <button onClick={()=>bulb === true ? setBulb(false):setBulb(true)}>{bulb === false  ? "Open" : "Close"}</button> */}

            
        </>
    
    )
}
export default Parent



