import React from 'react'
import CourseCard from '../mainStand/CourseCard';



const TopSlider = ({homeCourses, getCurrentCourseHomeHandler}) => {

    const sliderArr = ['', '', '']
    

    return(
        <div className='top_slider_wrap'>
            <div className='top_slider_head'>
                <h2>Выбор студентов</h2>
            </div>
            <div className='main_stand_slider_content_wrap'>
                        <div className="main_slider_control">
                                <i className="fa fa-arrow-left" />
                                </div>
                                <div className="main_slider_window">
                                    <div className="main_slider_length">
                                       {sliderArr.map((item, index)=> {
                                           return (
                                            <CourseCard img = {homeCourses[index].logo}
                                            title = {homeCourses[index].fullname}
                                            rating = {homeCourses[index].rating}
                                            students = {homeCourses[index].students}
                                            key = {index}
                                            onClick = {getCurrentCourseHomeHandler}
                                            arg = {homeCourses[index].courseId}
                                            arg2 = {homeCourses[index].authorId}
                                            />  
                                           )
                                       })}
                                    </div>


                                </div>
                                
                                <div className="main_slider_control">
                                <i className="fa fa-arrow-right" />
                                </div>
                             
                            </div>
        </div>
    )
}

export default TopSlider;