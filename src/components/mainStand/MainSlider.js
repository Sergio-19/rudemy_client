import React from "react";
import CourseCard from "./CourseCard";
import { Link } from 'react-router-dom';




const MainSlider = ({categories, currentCategory, getCoursesHandler, homeCourses, getCurrentCourseHomeHandler}) => {


    const sliderArr = ['', '', '']

    return(
        <div className='main_stand_slider_wrap'>
                    <div className='main_stand_slider'>
                        <div className='main_stand_slider_header'>
                            <h2>{categories[currentCategory].header}</h2>
                            <p>{categories[currentCategory].text}</p>

                            <Link to = '/courses'>
                            <button onClick = {()=> getCoursesHandler(currentCategory)}>
                            {categories[currentCategory].btnTitle}
                            </button>
                            </Link>
                        </div>

                        
                        <div className='main_stand_slider_content_wrap'>
                        <div className="main_slider_control">
                                <i className="fa fa-arrow-left" />
                                </div>
                                <div className="main_slider_window">
                                    <div className="main_slider_length">
                                       {sliderArr.map((item, index)=> {
                                           return(
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
                    
                </div>
    )
}

export default MainSlider;