import React from 'react'
import { Link } from 'react-router-dom';



const MainBanner = ({img}) => {

    return(
        <div className='main_banner_wrap'>
            <div className='main_banner_text'>
            <h1>ZenCourse</h1>
            <h3>Учись - развивайся!</h3>
            <h3>Преподавай - зарабатывай!</h3>

            <div className='button_light' style={{width: '250px', marginTop: '30px'}}>
                    <Link to = "/about">О проекте...</Link>
            </div>

            </div>

            {/* <img src = {img} alt = "main banner"/> */}
        </div>
    )
}


export default MainBanner;