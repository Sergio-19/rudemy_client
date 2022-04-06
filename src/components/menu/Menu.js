import React from 'react'
import {Link} from 'react-router-dom'



const Menu = ({showMenu, hideMenuHandler, currentCategory, getCoursesHandler}) => {


    const cl = ['menu_wrap']
    if(showMenu){
        cl.push('menu_wrap_show')
    }

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

function menuLinksHandler(category) {
    getCoursesHandler(category)
    hideMenuHandler()
}


    return(
        <div className= {cl.join(' ')}  onClick = {hideMenuHandler}>
            <div className='menu_header'>
                <i className='fa fa-times'/>
            </div>
            <div className='menu_wrap_links'>
                <ul>
                   {listArr.map((item, i)=> {
                       return (
                        <li onClick = {()=> menuLinksHandler(item.category)}
                            key = {i}
                        >
                            <Link to ='/courses'>{item.title}</Link> </li>
                       )
                   })}
                    
                </ul>
            </div>

        </div>
    )
}

export default Menu;