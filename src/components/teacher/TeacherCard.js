import React from 'react'



const TeacherCard = ({teacher}) => {

    const {fullname, students, courses, photo, speciality, rating, about} = teacher

    return(
        <div className='teacher_card'>
            <div className='teacher_card_name'>
                <h3>{fullname}</h3>
                <h4>{speciality}</h4>
            </div>

            <div className='teacher_card_info'>
                <div className='teacher_card_img'>
                    <img src={photo} alt = "teacher"/>
                </div>
                <div className='teacher_card_rating'>
                    <ul>
                        <li><i className='fa fa-star'/><span>{rating} Рейтинг</span></li>
                        {/* <li><i className='fa fa-user-circle'/><span>23283 Отзывы</span></li> */}
                        <li><i className='fa fa-user-plus'/><span>{students} Студентов</span></li>
                        <li><i className='fa fa-play-circle'/><span>{courses} Курсов</span></li>
                    </ul>
                </div>
                 </div>
                 <div className='teacher_card_message'>
                    <p>
                   {about}
                    </p>
                 </div>

        </div>
    )
}

export default TeacherCard;