import React from 'react'

import { useSelector, useDispatch } from 'react-redux';

import * as sliderActions from './actions/SliderActions'
import Slide from './Slide'
import Dots from './dots'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'
require('./slider.scss')

const Slider = () => {
    const slideWidth = () => {
        return document.querySelector('.slide').clientWidth
    }

    const {
        images, 
        index, 
        translateValue
    } = useSelector(state => state.slider);
   
    const dispatch = useDispatch();

    let renderSlides = () => {
        return images.map((curr, i) =>
            <Slide
                key={i}
                image={images[i]}
            />
        )
    }

    let goToPreviousSlide = () => {
        if(index === 0) {
            dispatch(sliderActions.setTranslateValue(-(images.length-1) * slideWidth()));
            dispatch(sliderActions.setIndex(images.length - 1));
            return
        }

        dispatch(sliderActions.setTranslateValue(translateValue + slideWidth()));
        dispatch(sliderActions.setIndex(index - 1));
    }

    let goToNextSlide = () => {
        if(index === images.length - 1) {
            dispatch(sliderActions.setTranslateValue(0));
            dispatch(sliderActions.setIndex(0));
            return
        }
        
        dispatch(sliderActions.setTranslateValue(translateValue - slideWidth()));
        dispatch(sliderActions.setIndex(index + 1));
    }

    let handleDotClick = i => {
        // Do nothing if someone clicks on the currently active dot
        if(i === index) 
          return
    
        // If the number taken from the i argument passed into handleDotClick is
        // less than the currently active dot, we obviously need to move backwards to a previous slide.
        if(i > index) {
          dispatch(sliderActions.setTranslateValue(-i * slideWidth()))
        }    
        // We need to go forward to a particular slide
        else {
          dispatch(sliderActions.setTranslateValue(
            translateValue + (index - i) * slideWidth()
          ))
        }
    
        dispatch(sliderActions.setIndex(i))
    }

    return (
        <div className="slider">
            <div className="slider-wrapper"
                style={{
                    transform: `translateX(${translateValue}px)`,
                    transition: 'transform ease-out 0.45s'
                }}>
                {renderSlides()}
            </div>

            <Dots
                index={index}
                images={images}
                dotClick={handleDotClick}
            />

            <LeftArrow
                prevSlide={goToPreviousSlide}
            />

            <RightArrow
                nextSlide={goToNextSlide}
            />
        </div>
    );
}

export default Slider;