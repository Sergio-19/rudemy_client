import React from 'react'
import CourseCard from '../mainStand/CourseCard';



const TopSlider = () => {

    return(
        <div className='top_slider_wrap'>
            <div className='top_slider_head'>
                <h2>Выбор студентов</h2>
            </div>
            <div className='main_stand_slider_content_wrap'>
                        <div className="main_slider_control">
                                <i class="fa fa-arrow-left" />
                                </div>
                                <div className="main_slider_window">
                                    <div className="main_slider_length">
                                        <CourseCard />
                                        <CourseCard />
                                        <CourseCard />
                                       
                                        
                                      
                                    </div>


                                </div>
                                
                                <div className="main_slider_control">
                                <i class="fa fa-arrow-right" />
                                </div>
                             
                            </div>
        </div>
    )
}

export default TopSlider;