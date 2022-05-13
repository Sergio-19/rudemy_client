import React from 'react'
import Rating from '../rating/Rating';



const Review = ({user, text, rating}) => {

    return(
        <div className='review_wrap'>
            <div className='review_person'>
                <div className='round_user'>
                    <i className='fa fa-user'/>
                </div>
            </div>

            <div className='review'>
                <div className='review_head'>
                    <div className='review_head_rating'>
                    <h4>{user}</h4>
                    <Rating rating={rating} />
                    </div>
                </div>

                <div className='review_text'>
                    <p>
                   {text}
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Review ;