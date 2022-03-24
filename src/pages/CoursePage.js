import React from 'react'
import Review from '../components/review/Review';
import Section2 from '../components/section2/Section2';
import Section2Card from '../components/section2Card/Section2Card';
import TeacherCard from '../components/teacher/TeacherCard';
import course from '../img/course.png'



const CoursePage = () => {
    return(
        <div className='course_page'>
            <div className='section1'>
                <div className='section1_img'>
                    <img src={course}/>
                </div>
                <div className='section1_info'>
                <h1>
                    Полный курс по Javascript + React, с нуля до результата
                </h1>
                <p>
                    Освойте самый популярный язык программирования - Javascript.
                    Оствойте библиотеку React и научитесь применять на практике!
                </p>

               <div className='section1_info_rating'>
               <span>
                    4,8 &nbsp;
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                </span>
                <small>
                    33246 студентов
                </small>

               </div>

               <p>Автор:  &nbsp;<span><a href='/'>Иван Петриченко</a></span></p>
               <p>Язык:  &nbsp;<span>Русский</span></p>

               <p>Последнее обновление: 03.2022</p>

               <div className='section1_info_price'>
                   <span>1290 руб. &nbsp; <small>5490 руб.</small></span>
               </div>

               <div className='section1_info_btn'>
                    <button>
                        Оплатить курс
                    </button>
               </div>

                <div className='section1_info_dostup'>
                    <p>Полный пожизненный доступ</p>
                </div>
               

                </div>

            </div>

           
            <Section2 title={"Чему вы научитесь"}>
                <Section2Card />
                <Section2Card />
                <Section2Card />
                <Section2Card />
                <Section2Card />
                <Section2Card />
                <Section2Card />
            </Section2>
            <Section2 title= "Требования">
            <ul>
                <li>Базовые навыки HTML, CSS (Крайне желательно пройти курс Web-разработчик, это первая часть)</li>
                <li>Любой редактор кода</li>
                <li>Желание выучить JavaScript</li>
                <li>Желательно базовое знание английского языка</li>
            </ul>
            </Section2>
            <Section2 title= "Описание">
            <p>
             Этот курс направлен на подробное изучение JavaScript без воды, но главное - немедленное применение его на практике.
             Это значит, что вы получите материал для работы и мы вместе будем создавать реальные проекты шаг за шагом.
             Вторая часть курса - это изучение самой популярной библиотеки на основе JavaScript - React.js со всеми необходимыми технологиями (в том числе и Redux)
             </p>
            </Section2>
            <Section2 title = "Преподаватель">
                <TeacherCard />
            </Section2>
            <Section2 title = "Отзывы">
               <Review user = "Максим"/>
               <Review user = "Андрей"/>
               <Review user = "Boris Y"/>
               <Review user = "Nikita"/>
               <Review user = "Andrei Z"/>
               <Review user = "Виктор"/>
            </Section2>

        </div>
    )
}

export default CoursePage;