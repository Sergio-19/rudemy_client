import React from 'react'
import { Link } from 'react-router-dom'



const Navigation = ({navIsOpen, navGetCoursesHandler, navIsOpenHandler, tokenState}) => {



    const cl = ['navigation_wrap']
    const classes = ['navigation_blur']

    const listArr = [{title: 'Разработка', category: 'development'}, 
    {title: 'Бизнес', category: 'business'},
    {title: 'Здоровье и фитнес', category: 'health'},
    {title: 'Дизайн', category: 'design'},
    {title: 'Финансы', category: 'finance'},
    {title: 'Маркетинг', category: 'marketing'},
    {title: 'Фото и Видео', category: 'photovideo'},
    {title: 'ИТ и ПО', category: 'technology'},
    {title: 'Личностный рост', category: 'coaching'},
    {title: 'Стиль жизни', category: 'lifestyle'},
    {title: 'Музыка и творчество', category: 'music'},
    {title: 'Учебные дисциплины', category: 'science'},
   ]

    if(navIsOpen) {
        cl.push('navigation_wrap_open')
        classes.push('navigation_blur_open')
    }

    function logoutHandler() {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        
    }

   


    return (
        <>
        <div className= {classes.join(' ')}></div>

        <div className={cl.join(' ')}>
            <div className='navigation_content_wrap'>
               {tokenState !== '' ?  <div className='navigation_login'>
                        <a href = '/'
                              onClick = {logoutHandler}  
                        >Выйти</ a>
                        <Link to = '/education'
                              onClick = {navIsOpenHandler}  
                        >Моё обучение</Link>
                </div> :
                 <div className='navigation_login'>
                 <Link to = '/signin'
                       onClick = {navIsOpenHandler}  
                 >Войти</ Link>
                 <Link to = '/signup'
                       onClick = {navIsOpenHandler}  
                 >Зарегистрироваться</Link>
         </div>
                }

                <div className='navigation_categories'>
                    <ul>
                        {listArr.map((item, i)=> {
                            return (
                                <li key = {i}
                                    onClick = {()=> navGetCoursesHandler(item.category)}
                                ><Link to = '/courses'>{item.title}</Link></li>
                            )
                        })}
                    </ul>

                </div>

            </div>

        </div>
        
        </>
    )
}


export default Navigation;