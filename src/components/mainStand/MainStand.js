import React from 'react'
import MainSlider from './MainSlider';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, getCurrentCategoryActionCreator, getCurrentCourseHome } from '../../store/mainReducer';
import SliderV2 from './SliderV2';


const MainStand = () => {

    const {categories, currentCategory, homeCourses} = useSelector((state)=> state.mainReducer)
    const dispatch = useDispatch()

    const listArr = [{title: 'Разработка', category: 'development'}, 
                     {title: 'Бизнес', category: 'business'},
                     {title: 'Здоровье и фитнес', category: 'health'},
                     {title: 'Дизайн', category: 'design'},
                     {title: 'Финансы', category: 'finance'},
                     {title: 'Маркетинг', category: 'marketing'},
                     {title: 'Фото и Видео', category: 'photovideo'},]

    function changeCategory(category){
        dispatch(getCurrentCategoryActionCreator(category))
    } 
    
    function getCoursesHandler(category) {
        dispatch(fetchCourses(category))
    }

    function getCurrentCourseHomeHandler(courseId, authorId){
        dispatch(getCurrentCourseHome(courseId, authorId))
    }
   
                          

    return(
        <div className='main_stand_wrap'>
            <div className='main_stand'>
                <div className='main_stand_header'>
                    <h2>Большой выбор курсов</h2>
                    <p>Новые онлайн-видеокурсы добавляются на сайт каждый месяц</p>
                </div>
                <div className='main_stand_nav'>
                    <ul>
                        {listArr.map((item, i)=> {
                            return (
                                <li onClick={()=> changeCategory(item.category)} key = {i}>
                                    <span style = {{color: currentCategory === item.category ? '#000' : '#6a6f73'}}>{item.title}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className='main_stand_slider_header'>
                            <h2>{categories[currentCategory].header}</h2>
                            <p>{categories[currentCategory].text}</p>

                            <Link to = '/courses'>
                            <button onClick = {()=> getCoursesHandler(currentCategory)}>
                            {categories[currentCategory].btnTitle}
                            </button>
                            </Link>
                        </div>
                {/* <MainSlider  categories={categories} 
                             currentCategory = {currentCategory} 
                             getCoursesHandler = {getCoursesHandler}
                             homeCourses = {homeCourses}
                             getCurrentCourseHomeHandler = {getCurrentCourseHomeHandler}
                             /> */}
                <SliderV2 img = {categories[currentCategory].img} 
                          getCoursesHandler = {getCoursesHandler}
                          currentCategory = {currentCategory}
                          />             
            </div>
           

        </div>
    )
}


export default MainStand;