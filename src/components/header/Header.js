import React from 'react';
import { Link } from 'react-router-dom';



const Header = ({showMenuHandler, tokenState, fetchMyCoursesHandler}) => {

  
            

    function logoutHandler() {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        
    }

    return(
        <header>
            <div className='header_logo'>
                <Link to='/'>Rudemy</Link>
            </div>
            <span className='header_category' onClick = {showMenuHandler} >Категории</span>
            <div className='header_input'>
                <div className='header_input_search'>
                <i className="fa fa-search" />
                </div>
                <input type = "text" placeholder='Ищите что угодно'/>
            </div>

            {tokenState !== '' ? <>
            <Link to = '/education' 
                  className='header_category'
                  >Моё обучение</Link>
            <div className='header_buttons'>
                <div className='button_light' onClick = {logoutHandler}>
                    <a href  ='/' >Выйти</a>
                </div>
            </div>
            </> : 
                <div className='header_buttons'>
                <div className='button_light'>
                    <Link to = "/signin">Войти</Link>
                </div>
                <div className='button_light'>
                    <Link to ='/signup'>Регистрация</Link>
                </div>
            </div>
            }
      
          
        </header>
    )
}

export default Header;