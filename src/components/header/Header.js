import React from 'react';



const Header = () => {

    return(
        <header>
            <div className='header_logo'>
                <a href='/'>Rudemy</a>
            </div>
            <span className='header_category'>Категории</span>
            <div className='header_input'>
                <div className='header_input_search'>
                <i class="fa fa-search" />
                </div>
                <input type = "text" placeholder='Ищите что угодно'/>
            </div>
            {/* <span className='header_category'>Моё обучение</span> */}
            <div className='header_buttons'>
                <div className='button_light'>
                    <a href = "/">Войти</a>
                </div>
                <div className='button_light'>
                    <a href='/'>Регистрация</a>
                </div>
            </div>
          
        </header>
    )
}

export default Header;