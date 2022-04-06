import React from 'react'
import ReactPlayer from 'react-player' 



const MyCourse = ({lessons, courseTitle, currentLesson, currentLessonHandler}) => {


    let linkArr = lessons.filter((lesson)=> lesson.title === currentLesson) 
    let link = linkArr.length > 0 ? linkArr[0].link : lessons[0].link




    return(
        <div className='mycourse_page_wrap'>
            <div className='mycourse_page_header'>
                <h3>{courseTitle}</h3>
            </div>

            <div className='mycourse_page_content'>
                <div className='player'>
                    <ReactPlayer url = {link} controls = {true}/>
                </div>
                <div className='lessons_list'>
                  {lessons.map((lesson, i)=>{
                      return(
                        <div className='lesson_block'
                             key = {i}
                             style = {{background: lesson.link === link ? '#57585a' : '#1c1d1f'}}
                             onClick = {()=> currentLessonHandler(lesson.title)}
                             >
                            <span> <small>Урок {i + 1}: &nbsp;&nbsp;</small>{lesson.title}</span>
                         </div>
                      )
                  })}
                </div>
            </div>

           
        </div>
    )
}


export default MyCourse;