import React from 'react'
import CourseSearchCard from '../components/courseSearchCard/CourseSearchCard';



const CoursesPage = () => {
    return(
        <div className='courses_page_wrap'>
        <div className='courses_page_header'>
            <h1>Курсы по теме "web разработка"</h1>
            <p>
                <i className="fa fa-user"/>
                <span>123348 студентов</span>
            </p>

        </div>

        <div className='courses_page_content'>
            <div className='courses_page_content_header'>
                <div className='courses_page_content_btn'>
                    <span><i className='fa fa-filter'/> &nbsp; Фильтровать</span>
                </div>
                <span>
                    Рузультат: 237
                </span>
            </div>

            <div className='courses_page_courses'>
                <CourseSearchCard />
                <CourseSearchCard />
                <CourseSearchCard />
                <CourseSearchCard />
                <CourseSearchCard />
                <CourseSearchCard />
                <CourseSearchCard />

            </div>

        </div>
        </div>
        
    )
}

export default CoursesPage;