import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCurrentCourses } from '../../store/mainReducer';
import Rating from '../rating/Rating';



const CourseSearchCard = ({course, arg, arg2, teacher}) => {

    const dispatch = useDispatch()

    function getCurrentCoursesHandler(courseId, authorId){
        dispatch(getCurrentCourses(courseId, authorId))
      }

const {rating, fullname, logo, shortdescription, price, oldPrice, students} = course


    return(
        <Link to = '/course' className='course_search_card' onClick={()=> getCurrentCoursesHandler(arg, arg2)}>
            <div className='course_search_card_img'
                   
            >
                <img src= {logo} alt = "image"/>   
             </div> 
            <div className='course_search_card_info'>
            <h3 className='course_card_head'>
                {fullname}
            </h3>
            <p className='course_search_card_description'>
                {shortdescription}
            </p>
            <p className='course_card_author'>{teacher.fullname}</p>
            <p className='course_card_rating'>
                <strong>{rating}</strong>
                <span>
                <Rating rating = {rating}/>
                </span>
                <small>({students})</small>
                </p>

            </div>
            <div className='course_search_card_price'>
                <span>
                    <strong>{price} руб.</strong><br/>
                    <small>{oldPrice} руб.</small>    
                </span> 
            </div>  

        </Link>
    )
}

export default CourseSearchCard;