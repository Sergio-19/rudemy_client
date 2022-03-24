import React from 'react'
import course from '../../img/course.png'


const CourseSearchCard = () => {

    return(
        <div className='course_search_card'>
            <div className='course_search_card_img'>
                <img src= {course} alt = "image"/>   
             </div> 
            <div className='course_search_card_info'>
            <h3 className='course_card_head'>
                Веб разработка - с нуля до профессионала. Full Stack
            </h3>
            <p className='course_search_card_description'>
                Доступно и просто для новичков. Начните с основ и пройдтье весь путь до создания собственных приложений
            </p>
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
            <div className='course_search_card_price'>
                <span>
                    <strong>1290 руб.</strong><br/>
                    <small>5490 руб.</small>    
                </span> 
            </div>  

        </div>
    )
}

export default CourseSearchCard;