import React from 'react'
import teacher from '../../img/teacher.jpg'


const TeacherCard = () => {

    return(
        <div className='teacher_card'>
            <div className='teacher_card_name'>
                <h3>Иван Петриченко</h3>
                <h4>Frontend Developer</h4>
            </div>

            <div className='teacher_card_info'>
                <div className='teacher_card_img'>
                    <img src={teacher} alt = "teacher"/>
                </div>
                <div className='teacher_card_rating'>
                    <ul>
                        <li><i className='fa fa-star'/><span>4,8 Рейтинг</span></li>
                        <li><i className='fa fa-user-circle'/><span>23283 Отзывы</span></li>
                        <li><i className='fa fa-user-plus'/><span>52229 Студентов</span></li>
                        <li><i className='fa fa-play-circle'/><span>6 Курсов</span></li>
                    </ul>
                </div>
                 </div>
                 <div className='teacher_card_message'>
                    <p>
                    Привет!
                    Меня зовут Петриченко Иван. Уже более 5 лет занимаюсь Front-End разработкой. Я создаю сайты "под ключ", обучаю этому взрослых и детей, организовываю и провожу мероприятия, занимаюсь консалтингом и аудитом.
                    В моей копилке уже несколько организованных и записанных авторских онлайн курсов, люблю помогать людям и делиться с ними знаниями.
                    Я фрилансер, очень люблю путешествовать, выступать на различных конференциях и передавать свой опыт другим.
                    </p>
                 </div>

        </div>
    )
}

export default TeacherCard;