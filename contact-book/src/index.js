import React from 'react';
import ReactDOM from 'react-dom';

function Card(props){
  return <div className="contactCard">
    <div className='upperpart'>
      <h2> {props.name}</h2>
      <img src={props.img} alt=""></img>
    </div>
    <p>Mobile No. : {props.mobile}</p>
  </div>
}

ReactDOM.render(
  <div className='card'>
    <h1>Contact List App</h1>
    <Card name="loki" img="https://picsum.photos/seed/picsum/100/100" mobile="914236363"/>
    <Card name="thor" img="https://picsum.photos/100/100?grayscale" mobile="914236363"/>
    <Card name="tony" img="https://picsum.photos/100/100?grayscale" mobile="914236363"/>
    <Card name="stark" img="https://picsum.photos/100/100?grayscale" mobile="914236363"/>
  </div>, 
  document.getElementById("root")
);
