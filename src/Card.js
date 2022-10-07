import React from 'react'
import './App.css'

const Card = props => {
console.log("PROP", props)
  return (
    <div className="card">
    <img src={props.img} alt="Avatar" style={{width: '100%'}} />
    <div className="container">
      <h4><b>{props.name}</b></h4> 
      <p>{props.title}</p> 
      <button onClick={props.onChangeName}>Click this</button>
      <div>{props.children}</div> 
    </div>
  </div>

  )
}

export default Card