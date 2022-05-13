import React, { useRef, useState } from 'react'
import course from '../../img/course.png'
import { Link } from 'react-router-dom'

const SliderV2 = ({img, currentCategory, getCoursesHandler}) => {

    return(
        <>
        <div className='slider' >
            <div className='slider_line' onClick={()=> getCoursesHandler(currentCategory)}>
                <Link to = '/courses' >
                    <img src= {img} alt = 'course' />
                </Link>
            </div>
         </div>
        
        </>
        
    )
}


export default SliderV2;