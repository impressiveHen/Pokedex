import React from 'react'
import Dot from './dot'

const Dots = (props) => {
  const dotsGroup = props.images.map((image, i) => {
    let active = (i === props.index) ? true : false
    return (
      <Dot
        key={i}
        id={i}
        active={active}
        dotClick={props.dotClick}
      />
    )
  })

  return (
    <div className="dots-container">
      {dotsGroup}
    </div>
  )
}

export default Dots
