import React from 'react'

const Item = (props) => {
  return (
    <div>
      <img src={props.image}/>
      <p>{props.name}</p>
      <div>{props.price}</div>
    </div>
  )
}

export default Item
