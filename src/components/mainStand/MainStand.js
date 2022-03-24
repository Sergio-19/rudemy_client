import React from 'react'
import MainSlider from './MainSlider';


const MainStand = () => {

    return(
        <div className='main_stand_wrap'>
            <div className='main_stand'>
                <div className='main_stand_header'>
                    <h2>Большой выбор курсов</h2>
                    <p>Выбирайте из 183 000 онлайн-видеокурсов, новые курсы добавляются на сайт каждый месяц</p>
                </div>
                <div className='main_stand_nav'>
                    <ul>
                        <li><a href='/'>Python</a></li>
                        <li><a href='/'>Javascript</a></li>
                        <li><a href='/'>Веб-разработка</a></li>
                        <li><a href='/'>Дизайн</a></li>
                        <li><a href='/'>Финансы</a></li>
                        <li><a href='/'>Маркетинг</a></li>
                        <li><a href='/'>Фото и Видео</a></li>
                    </ul>
                </div>
                <MainSlider />
            </div>
           

        </div>
    )
}


export default MainStand;