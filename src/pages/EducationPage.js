import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import EducationCard from '../components/educationCard/EducationCard'
import MyLoader from '../components/loader/MyLoader'
import Section2 from '../components/section2/Section2'




const EducationPage = ({user, myCourses, myLoading, lessons, fetchLessonsHandler}) => {





        const navigate = useNavigate()

        if(lessons.length > 0){
            navigate('/mycourse')
        }

        // if(myCourses.length === 0){
        //     navigate('/')
        // }
        
    return(
        <div className='education_page'>
          {Object.keys(user).length > 0 ? 
             <Section2 title={'Моё обучение'}>
             <div className='education_courses'>
                 {myLoading && myCourses.length > 0 ? myCourses.map((course, i)=> {
                     return( 
                      <EducationCard  logo = {course.logo}
                                      fullname = {course.fullname}
                                      author = {course.author}
                                      rating = {course.rating}
                                      courseId = {course.courseId}
                                      key = {i}
                                     fetchLessonsHandler = {fetchLessonsHandler}  
                                      />
                                       )
                                       }) : <h2>У вас пока нет доступных курсов...</h2>}
                                        </div>
                                        </Section2> :
                     <Section2 title={'Информация отсутствует'}>
            <div className='education_not'>
             <div><Link to = '/'>Вернуться на главную страницу</Link></div> 
            </div>
            </Section2>                     
        }

           
        
            

        </div>
    )

}


export default EducationPage