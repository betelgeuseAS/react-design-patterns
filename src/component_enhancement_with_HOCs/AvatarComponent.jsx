import React from 'react'

export const AvatarComponent = (props) => {
  return (
    <div>
      <p>I am a {props.name}.</p>
      <p>{props.description}</p>
    </div>
  )
}
