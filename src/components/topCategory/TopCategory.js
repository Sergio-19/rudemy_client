import React from 'react'
import business from '../../img/business.jpg'
import design from '../../img/design.jpg'
import development from '../../img/development.jpg'
import marketing from '../../img/marketing.jpg'
import music from '../../img/music.jpg'
import personal from '../../img/personal.jpg'
import software from '../../img/software.jpg'
import photo from '../../img/photo.jpg'
import CategoryCard from './CategoryCard'



const TopCategory = () => {

    return(
        <div className='top_category_wrap'>
            <CategoryCard img = {design} title = "Дизайн"/>
            <CategoryCard img = {development} title = "Разработка"/>
            <CategoryCard img = {marketing} title = "Маркетинг"/>
            <CategoryCard img = {software} title = "ИТ и ПО"/>
            <CategoryCard img = {personal} title = "Личностный рост"/>
            <CategoryCard img = {business} title = "Бизнес"/>
            <CategoryCard img = {photo} title = "Фото и Видео"/>
            <CategoryCard img = {music} title = "Музыка"/>

        </div>
    )
}


export default TopCategory;