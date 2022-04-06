import React from 'react'
import { Link } from 'react-router-dom'
import course from '../../img/course.png'
import Rating from '../rating/Rating'



const EducationCard = ({logo, fullname, author, rating, courseId, fetchLessonsHandler}) => {
    return (
        <div className='education_card_wrap'>
        {/* <Link to = '/mycourse' className='education_card_link'> */}
                    <div className='education_card_top' 
                         onClick = {()=> fetchLessonsHandler(courseId, fullname)}
                    >
                        <img src= {logo} alt = 'mycourse'/>
                        <div className='education_card_blur'>
                        <div className='education_card_play'>
                            <i className='fa fa-play' />
                        </div>
                        </div>
                        
                    </div>

                    <div className='education_card_bottom'>
                       <div className='educatiom_card_bottom_name'>
                           <h4>{fullname}</h4>
                        </div> 

                        <div className='educatiom_card_bottom_author'>
                            <h4>Автор: {author}</h4>    
                        </div>
                        
                        <div className='educatiom_card_bottom_rating'>
                            <span>Рейтинг: <Rating rating={rating}/></span>
                        </div>
                        

                    </div>
                    {/* </Link> */}
                    </div>
    )
}

export default EducationCard