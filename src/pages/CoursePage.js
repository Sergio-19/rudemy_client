import React from 'react'
import { useSelector } from 'react-redux';
import MyLoader from '../components/loader/MyLoader';
import Rating from '../components/rating/Rating';
import Review from '../components/review/Review';
import Section2 from '../components/section2/Section2';
import Section2Card from '../components/section2Card/Section2Card';
import TeacherCard from '../components/teacher/TeacherCard';




const CoursePage = ({currentCourse, teacher, postPaymentHandler, user}) => {


    const {fullname, logo, shortdescription, 
           rating, language, creationDate, 
           price, oldPrice, students, 
           skills, knowledge, description, author, courseId } = currentCourse

           


    const {email, userId, courseList} = user  
    


    const skillsArr = String(skills).split('#') 
    const knowledgeArr = String(knowledge).split('#')

    // const skillsArr = []
    // const knowledgeArr = []
          
      
    return(
        <div className='course_page'>
           {Object.keys(currentCourse).length > 0 && Object.keys(teacher).length > 0 ? 
            <>
            <div className='section1'>
                <div className='section1_img'>
                    <img src={logo}/>
                </div>
                <div className='section1_info'>
                <h1>
                    {fullname}
                </h1>
                <p>
                   {shortdescription} 
                </p>

               <div className='section1_info_rating'>
               <span>
                    {rating} &nbsp;
                    <Rating rating = {rating}/>
                </span>
                <small>
                    {students} студентов
                </small>

               </div>

               <p>Автор:  &nbsp;<span><a href='/'>{teacher.fullname}</a></span></p>
               <p>Язык:  &nbsp;<span>{language}</span></p>

               <p>Последнее обновление: {creationDate}</p>

               <div className='section1_info_price'>
                   <span>{price} руб. &nbsp; <small>{oldPrice} руб.</small></span>
               </div>

               <div className='section1_info_btn'>
                    <button onClick ={()=> postPaymentHandler(email, userId, courseList, fullname, courseId, price)}>
                        Оплатить курс
                    </button>
               </div>

                <div className='section1_info_dostup'>
                    <p>Полный пожизненный доступ</p>
                </div>
               

                </div>

            </div>

           
            <Section2 title={"Чему вы научитесь"}>
                {skillsArr.map((item, i)=> {
                    return(
                        <Section2Card text = {item} key = {i}/>
                    )
                })}
                
            </Section2>
            <Section2 title= "Требования">
            <ul>
                {knowledgeArr.map((item, i)=> {
                    return (
                        <li key = {i}>{item}</li>
                    )
                })}
                
            </ul>
            </Section2>
            <Section2 title= "Описание">
            <p>
             {description}
             </p>
            </Section2>
            <Section2 title = "Преподаватель">
                <TeacherCard teacher = {teacher}/>
            </Section2>
            <Section2 title = "Отзывы">
               <Review user = "Максим"/>
               <Review user = "Андрей"/>
               <Review user = "Boris Y"/>
               <Review user = "Nikita"/>
               <Review user = "Andrei Z"/>
               <Review user = "Виктор"/>
            </Section2>
            </>
           : <MyLoader />
            
           }

        </div>
    )
}

export default CoursePage;