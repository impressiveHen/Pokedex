import React from 'react'

const Dot = (props) => {
  const names = props.active ? 'dot active' : 'dot'
  return <div className={names} onClick={() => props.dotClick(props.id)} />
}

export default Dot
