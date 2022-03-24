import React from 'react'



const Review = ({user}) => {

    return(
        <div className='review_wrap'>
            <div className='review_person'>
                <div className='round_user'>
                    <i className='fa fa-user'/>
                </div>
            </div>

            <div className='review'>
                <div className='review_head'>
                    <h4>{user}</h4>
                    <div className='review_head_rating'>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <span>Неделю назад</span>
                    </div>
                </div>

                <div className='review_text'>
                    <p>
                    Если коротко, то 10 звёзд
                    JavaScript лучше объяснить не сможет никто !
                    Надеюсь React будет таким же, ведь большую часть именно он и занимает.
                    И так же надеюсь, что со знанием React я наконец стану Middle )
                    Если будет обратная связь, будет шикарно.
                    Рекомендую всем, кто не разбирается в js - это лучшее для начинающий и знающих азы курс
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Review ;