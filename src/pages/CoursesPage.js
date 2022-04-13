import React from 'react'
import CourseSearchCard from '../components/courseSearchCard/CourseSearchCard';



const CoursesPage = ({categories, currentCategory, courses, loading, teacher, query}) => {


    
    return(
        <div className='courses_page_wrap'>
        {courses.length > 0 && loading ? 
        <>
            <div className='courses_page_header'>
            {query === '' || query !== '' ? <h1>Поиск по запросу: {query}</h1> : 
            <h1>Курсы по теме "{categories[currentCategory].title}"</h1>}
            <p>
                {/* <i className="fa fa-user"/> */}
                {/* <span>123348 студентов</span> */}
            </p>

        </div>
            <div className='courses_page_content'>
            <div className='courses_page_content_header'>
                <div className='courses_page_content_btn'>
                    <span><i className='fa fa-filter'/> &nbsp; Фильтровать</span>
                </div>
                <span>
                    Рузультат: {courses.length}
                </span>
            </div>

            <div className='courses_page_courses'>
               {courses.map((course, i)=> {
                   return(
                    <CourseSearchCard course = {course}
                                      teacher = {teacher} 
                                      key = {i}
                                      arg = {course.courseId}
                                      arg2 = {course.authorId}
                                        
                    />
                   )
               })}
               

            </div>

        </div>
        </> :
            <h1>Курсы не найдены</h1>
        }
        
        </div>
        
    )
}

export default CoursesPage;