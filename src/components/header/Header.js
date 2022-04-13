import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



const Header = ({showMenuHandler, tokenState, fetchMyCoursesHandler, changeSearchHandler, postKey, query, searchHandler}) => {

  
            

    function logoutHandler() {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        
    }

    const navigate = useNavigate()

    function goCourses(){
        navigate('/courses')
    }


   async function searchClickHandler(value) {
       await searchHandler(value)
         goCourses()   
    }

 
    return(
        <header>
            <div className='header_logo'>
                <a href ='/'>Rudemy</a>
            </div>
            <span className='header_category' onClick = {showMenuHandler} >Категории</span>
            <div className='header_input'>
                <div className='header_input_search'>
                <i className="fa fa-search" 
                   onClick={window.location.href === 'http://localhost:3001/' ? goCourses : ()=> searchHandler(query)} 
                />
                </div>
                <input type = "text" 
                       value = {query} 
                       placeholder='Ищите что угодно' 
                       onChange={(event)=> changeSearchHandler(event)}
                       onKeyDown = {(event)=> postKey(event)}
                       onInput = {goCourses}
                       />
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