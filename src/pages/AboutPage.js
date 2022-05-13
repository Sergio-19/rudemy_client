import React from 'react'
import Section2 from '../components/section2/Section2';
import { Link } from 'react-router-dom';


const AboutPage = () => {

    return(
        <div className='about'>
          <Section2>
            <div className='about_header'>
                <h2>Добро пожаловать в ZenCourse</h2><br/><br/>
            </div>
            <div className='about_text'>
                <p>ZenCourse - это открытая площадка для онлайн обучения 24/7.</p>
                <p>Благодаря удобному поиску курсов и навигации по разделам, вы всегда найдёте то, что нужно именно вам! </p>
                <br/>
                <p>
                    <span>
                        ZenCourse для студентов:
                    </span><br/>
                Для того, чтобы начать обучение необходимо зарегистрироваться, выбрать нужный вам ресурс и произвести оплату,
                   после подтверждения оплаты в разделе моё обучение вам будут доступны выбранные курсы.
                </p>
                <p><br/>
                    <span>
                        ZenCourse для преподавателей:
                    </span><br/>
                    ZenCourse - это открытая площадка, где любой кто хочет делиться своими знаниями с другими может стать преподавателем.
                </p>
            </div>
            <div className='about_btn'>
            <div className='button_light' style={{width: '300px', marginTop: '30px'}}>
                    <Link to = "/">Вернуться на главную страницу</Link>
            </div>
            </div>
          </Section2>

        </div>
    )
}


export default AboutPage;