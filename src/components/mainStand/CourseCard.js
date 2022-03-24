import React from 'react'
import course from '../../img/course.png'



const CourseCard = () => {

    return(
        <div className='course_card'>
            <div className='course_card_img'>
                <img src= {course} alt = "course" /> 
            </div>
            <h3 className='course_card_head'>
                Веб разработка - с нуля до профессионала. Full Stack
            </h3>
            <p className='course_card_author'>Youra Allakhverdov</p>
            <p className='course_card_rating'>
                <strong>4,4</strong>
                <span>
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star" />
                <i class="fa fa-star-half" />
                </span>
                <small>(1792)</small>
                </p>

        </div>
    )
}

export default CourseCard;