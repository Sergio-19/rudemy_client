import React from 'react'
import MainBanner from '../components/mainBanner/MainBanner'
import MainStand from '../components/mainStand/MainStand'
import Benefits from '../components/benefits/Benefits'
import TopCategory from '../components/topCategory/TopCategory'
import mainBanner from '../img/main-banner.jpg'
import Slider from '../components/slider/Slider'




const HomePage = ({homeCourses, getCurrentCourseHomeHandler}) => {
    return(
        <>
        <MainBanner img = {mainBanner}/>
        <MainStand/> 
        <Benefits /> 
        {/* <Slider homeCourses = {homeCourses} /> */}
        <TopCategory />
        </>
    )
}


export default HomePage;