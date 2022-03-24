import React from "react";
import CourseCard from "./CourseCard";



const MainSlider = () => {

    return(
        <div className='main_stand_slider_wrap'>
                    <div className='main_stand_slider'>
                        <div className='main_stand_slider_header'>
                            <h2>Создавайте сайты и веб-приложения</h2>
                            <p>Мир разработки отличается невероятным разнообразием и зачастую связан с интернетом. Большая часть нашей жизни также связана с интернетом, поэтому новые отрасли постоянно стремятся создавать, поддерживать и улучшать сайты и приложения, которые становятся неотъемлемой частью нашей жизни.         
                            </p>
                            <button>
                                Все курсы по веб-разработке
                            </button>
                        </div>

                        
                        <div className='main_stand_slider_content_wrap'>
                        <div className="main_slider_control">
                                <i class="fa fa-arrow-left" />
                                </div>
                                <div className="main_slider_window">
                                    <div className="main_slider_length">
                                        <CourseCard />
                                        <CourseCard />
                                        <CourseCard />
                                       
                                        
                                      
                                    </div>


                                </div>
                                
                                <div className="main_slider_control">
                                <i class="fa fa-arrow-right" />
                                </div>
                             
                            </div>

                    </div>
                    
                </div>
    )
}

export default MainSlider;