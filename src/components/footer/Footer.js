import React from 'react'



const Footer = () => {

    return(
        <footer>
            <div className='footer_container'>
            <div className='footer_content'>
                <div className='footer_content_info'>
                    <ul>
                        <li className='footer_content_head'>Информация</li>
                        <li>О нас</li>
                        <li>E-mail: zencourse@gmail.com</li>
                        <li>Tel: +7 (812) 241-36-07</li>
                        <li><a href = 'http://m921098l.beget.tech/' target={'_blank'}>Admin</a></li>
                    </ul>
                </div>
                <div className='footer_content_dop'>
                    <ul>
                        <li className='footer_content_head'>Дополнительно</li>
                        <li>Политика конфиденциальности</li>
                        <li>Публичная оферта</li>
                        <li>Личный кабинет</li>
                    </ul>
                </div>
            </div>
            <div className='footer_footer'>
                <h2>ZenCourse</h2>
                <span>© ZenCourse 2020</span>
            </div>
            </div>
        </footer>
    )
}

export default Footer;