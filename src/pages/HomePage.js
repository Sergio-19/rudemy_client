import React from 'react'
import MainBanner from '../components/mainBanner/MainBanner'
import MainStand from '../components/mainStand/MainStand'
import TopSlider from '../components/topslider/TopSlider'
import Benefits from '../components/benefits/Benefits'
import TopCategory from '../components/topCategory/TopCategory'
import mainBanner from '../img/main-banner.jpg'



const HomePage = () => {
    return(
        <>
        <MainBanner img = {mainBanner}/>
        <MainStand/> 
        <Benefits /> 
        <TopSlider />
        <TopCategory />
        </>
    )
}


export default HomePage;