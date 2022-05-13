import React from 'react'
import AwesomeSlider from 'react-awesome-slider';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';
import health from '../../img/health2.jpg' 


const Slider = ({homeCourses}) => {


  
    return(
        <>
        <div className='slider_header'>
            <div>
                <h2>
                    Студенты выбирают
                </h2>
            </div>
        </div>
         <div className='slider_wrapper'>
         <AwesomeSlider cssModule={AwesomeSliderStyles}>
            <div data-src= {health} />
            <div data-src= {health} />
            <div data-src= {health} />
        </AwesomeSlider>

        </div>
        </>
       
    )
}


export default Slider;