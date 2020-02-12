import React from 'react';
import leftArrow from "../../assets/slider-left-arrow.svg";

const LeftArrow = (props) => {
  return (
    <div className='left-arrow' onClick={props.prevSlide}>
      <img src={leftArrow} alt="left-arrow" />
    </div>
  )
}

export default LeftArrow;