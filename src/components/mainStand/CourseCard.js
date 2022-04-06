import React from 'react'
import Rating from '../rating/Rating';
import { Link } from 'react-router-dom'




const CourseCard = ({img, title, rating, students, onClick, arg, author, arg2}) => {

    return(
        <Link to = {`/course`} className='course_card'>
            <div className='course_card_img'
                 onClick = {()=> onClick(arg, arg2)}
                >
                <img src= {img} alt = "course" /> 
            </div>
            <h3 className='course_card_head'>
                {title}
            </h3>
            <p className='course_card_author'>{author}</p>
            <p className='course_card_rating'>
                <strong>{rating}</strong>
                <Rating rating = {rating}/>
                <small>({students})</small>
                </p>

        </Link>
    )
}

export default CourseCard;