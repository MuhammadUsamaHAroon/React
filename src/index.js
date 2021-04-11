import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const fName = "Usama";
const LastName = "Haroon";
const currentDate = new Date().toDateString()
const currentTime = new Date().toTimeString()
const img1 = "https://picsum.photos/150/300"
const img2 = "https://picsum.photos/200/300"
const img3 = "https://picsum.photos/255/300"

const heading = {
  color:"Blue",
  fontSize:"50px",
  textAlign:"center",
  // justifyContent:"space-around",
  // backgroundColor:"red",
  // margin:"auto",
  fontFamily:" serif",
  fontTransformation:"capitalize",
  textShadow:"2px 4px 8px green"
  
}
const images = {
  display:"Flex",
  justifyContent:"center",
  margin:"auto",
  // backgroundColor:",


}

ReactDOM.render(
  <>
 <h1 style = {heading}>{`My Name is ${fName} ${LastName}`}</h1>
 <p>List  Of {Math.random()} Favourite Series</p>
 <p>{`Current Date is: ${currentDate}`}</p>
 <p>{`Current Time is: ${currentTime}`}</p>
 <ol><li>Erturul Ghazi</li>
 <li>Usman Ghazi</li>
 <li>Sultan Alauddin Ayubi</li></ol>
 <div style = {images}>
 <a href = "https://github.com/MuhammadUsamaHAroon/React/tree/master/src/Screen">
   <img src = {img1}alt = "Random Images"/></a>
 <img src = {img2}alt = "Random Images"/>
 <img src = {img3}alt = "Random Images"/>
 </div>

  </>,
  // <React.StrictMode>
  //   <App/>
  // </React.StrictMode>
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
