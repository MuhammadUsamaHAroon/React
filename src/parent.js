import React from 'react'
import FirstChild from './FirstChild'
import SecondChild from './SecondChild'

const arrObj1 = [{user:"Arshaq",age:25},{user:"Areeb",age:20},{user:"Arif",age:22}]
const arrObj2 = [{user:"Junaid",age:25},{user:"jawwad",age:20},{user:"Addel",age:22}]
// console.log(arrObj1

function Parent(){
    // let title1 = "MY Name is Usama"
    // let title2 = "My Name is Ammar"
    

    return(
    
        
        <div>
           

            <FirstChild arra1={arrObj1}/>

        
            <SecondChild arra2={arrObj2} />
        </div>
    
    )
}
export default Parent



