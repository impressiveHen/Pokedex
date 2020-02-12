import React from 'react';
import rightArrow from "../../assets/slider-right-arrow.svg";

const RightArrow = (props) => {
  return (
    <div className='right-arrow' onClick={props.nextSlide}>
      <img src={rightArrow} alt='right-arrow' />
    </div>
  )
}

export default RightArrow;