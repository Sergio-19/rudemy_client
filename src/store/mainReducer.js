 import axios from 'axios'
 import development from '../img/development2.jpg'
 import business from '../img/business.jpeg'
 import health from '../img/health2.jpg'
 import design from '../img/design2.jpg'
 import finance from '../img/finance2.jpg'
 import marketing from '../img/marketing.png'
 import photovideo from '../img/photovideo.jpg'
 import technology from '../img/technology.jpg'
 import coaching from '../img/coaching.jpg'
 import life from '../img/life.jpg'
 import music from '../img/music2.jpg'
 import science from '../img/science.jpg'

const initialState = {
        courses: [],
        homeCourses: [],
        currentCourse: {},
        teacher: {},
        loading: true,
        categories: {
                development: {title: 'Разработка',
                              header: 'Создавайте сайты и веб-приложения',
                              text: 'Мир разработки отличается невероятным разнообразием и зачастую связан с интернетом. Большая часть нашей жизни также связана с интернетом, поэтому новые отрасли постоянно стремятся создавать, поддерживать и улучшать сайты и приложения, которые становятся неотъемлемой частью нашей жизни.',
                              btnTitle: 'Все курсы по веб-разработке',
                              img: development  
                             },
                business: { title: 'Бизнес',
                            header: 'Откройте для себя мир бизнеса',
                            text: 'Бизнес - это наука! Откройте для себя мир бизнеса и измените свою жизнь раз и навсегда. Поверьте это возможно!',
                            btnTitle: 'Все курсы категории бизнес' ,
                            img: business 

                          },
                health: { title: 'Красота и здоровье',
                          header: 'Красота и здоровье - всё здесь',
                          text: 'Спорт, Здоровье, Фитнес, красота - здесь вы найдёте все самое полезное для вашего организма! В 21 веке - веке стресса, если вы не позаботитесь о своем здоровье, за вас этого никто не сделает',
                          btnTitle: 'Здоровье и фитнес все курсы',
                          img: health
                        },
                design: { title: 'Дизайн',
                          header: 'Расширьте свои границы, изучайте дизайн вместе с нами',
                          text: 'Изучение дизайна — это не только фундамент для многих видов творческой деятельности, но еще и отличный способ для снятия стресса и развития творческих способностей.',
                          btnTitle: 'Все курсы по дизайну',
                          img: design
                          
                        },
                finance: { title: 'Финансы',
                           header: 'Мир финансов ждёт вас',
                           text: 'Начните изучать финансы прямо сейчас, умение распоряжаться своими финансами, инвестиции и много других интересных и важных вещей ждёт вас здесь ' ,
                           btnTitle: 'Все курсы про финансы' ,
                           img: finance  

                        },
                marketing: { title: 'Маркетинг',
                             header: 'Изучай маркетинг и приумножай свой капитал',
                             text: 'Маркетинг - наука миллиардеров! Начни постигать эту важную науку прямо здесь и сейчас' ,  
                             btnTitle:  'Все курсы по маркетингу' ,
                             img: marketing 
                           },
                photovideo: { title: 'Фото и Видео',
                              header: 'Фото и видео',
                              text: 'Раздел для тех кто имеет отношение к фотографии и видеосъемке, или хочет преобщиться к прекрасному' ,
                              btnTitle: 'Фото и Видео все курсы',
                              img: photovideo 
                            },
                technology: { title: 'Информационные технологии и программное обеспечение',
                            header: 'ИТ и ПО',
                            text: 'ИТ и ПО - за этим будущее, все курсы по теме Информационные технологии и программное обеспечение здесь.' ,
                            btnTitle: 'Все курсы по теме ИТ и ПО' ,
                            img: technology
                            }, 
                coaching: { title: 'Личностный рост',
                            header: 'Учитесь у лучших коучей, и совершенствуйся вместе с ними',
                            text: 'Лучшие коучи, специалисты по личностному росту ждут вас в этом разделе' ,
                            btnTitle: 'Личностный рост все курсы',
                            img: coaching 
                            }, 
                lifestyle: { title: 'Стиль жизни',
                            header: 'Учитесь у лучших коучей, и совершенствуйся вместе с ними',
                            text: 'Лучшие коучи и курсы по теме стиль жизни ждут вас в этом разделе' ,
                            btnTitle: 'Стиль жизни все курсы' ,
                            img: life
                            },  
                     music: { title: 'Музыка и творчество',
                            header: 'В этом разделе всё что связано с творчеством',
                            text: 'Всё что связано с музыкой и творчеством, всё в этом разделе' ,
                            btnTitle: 'Музыка и творчество все курсы' ,
                            img: music
                            },
                   science: { title: 'Учебные дисциплины',
                            header: 'Учебные дисциплины',
                            text: 'Всё что связано с наукой и учебными дисциплинами находится здесь' ,
                            btnTitle: 'Учебные дисциплины все курсы',
                            img: science 
                            }                                                                      
                       },
            currentCategory: 'development'
}

export function mainReducer(state = initialState, action){
        switch(action.type){
                case FETCH_COURSES:
                        return {...state, courses: action.payload}
                case FETCH_HOME_COURSES:
                        return {...state, homeCourses: action.payload}        
                case IS_LOADING:
                        return {...state, loading: true}  
                case NOT_LOADING:
                        return {...state, loading: false}        
                case GET_CURRENT_CATEGORY:
                        return {...state, currentCategory: action.category} 
                case CLEAR_CURRENT_COURSE:
                        return {...state, currentCourse: {}}        

                case GET_CURRENT_COURSE_HOME:
                           let courseId = action.payload
                           let courseArr = state.homeCourses.filter((course)=> course.courseId === courseId) 
                          let curCourse = courseArr[0]   
                        return {...state, currentCourse: curCourse}
                case GET_CURRENT_COURSE_COURSES:
                        let courId = action.payload
                        let courArr = state.courses.filter((course)=> course.courseId === courId) 
                       let currCourse = courArr[0]   
                     return {...state, currentCourse: currCourse}   
                case GET_TEACHER:
                        return {...state, teacher: action.payload} 
                case CLEAR_TEACHER:
                        return {...state, teacher: {}}                                  


            default:
                return state
        }
}


export const FETCH_COURSES = 'FETCH_COURSES'
export const FETCH_HOME_COURSES = 'FETCH_HOME_COURSES'
export const IS_LOADING = 'IS_LOADING'
export const NOT_LOADING = 'NOT_LOADING'
export const GET_CURRENT_CATEGORY = 'GET_CURRENT_CATEGORY'
export const GET_CURRENT_COURSE_HOME = 'GET_CURRENT_COURSE_HOME'
export const GET_CURRENT_COURSE_COURSES = 'GET_CURRENT_COURSE_COURSES'
export const CLEAR_CURRENT_COURSE = 'CLEAR_CURRENT_COURSE'

export const GET_TEACHER = 'GET_TEACHER'
export const CLEAR_TEACHER = 'CLEAR_TEACHER'


export function getCurrentCourseHome(courseId, authorId){
        return async (dispatch) => {
                dispatch(notLoadingActionCreator())
                dispatch(clearCurrentCourseActionCreator())
                dispatch(clearTeacherActionCreator())
                const response = await axios.post('http://45.67.59.112:8080/course/teacher', {authorId})
               const data = response.data 
               const teacher = data.author[0]  
               dispatch(getTeacherActionCreator(teacher))
             await setTimeout(()=>{
                dispatch({type: GET_CURRENT_COURSE_HOME, payload: courseId})
             }, 1000)
             dispatch(isloadingActionCreator())   
        }
} 

export function getCurrentCourses(courseId, authorId){
        return async (dispatch) => {
                dispatch(notLoadingActionCreator())
                dispatch(clearCurrentCourseActionCreator())
                dispatch(clearTeacherActionCreator())
                const response = await axios.post('http://45.67.59.112:8080/course/teacher', {authorId})
                const data = response.data 
                const teacher = data.author  
                dispatch(getTeacherActionCreator(teacher))  
             await setTimeout(()=>{
                dispatch({type: GET_CURRENT_COURSE_COURSES, payload: courseId})
             }, 1000)
             dispatch(isloadingActionCreator())   
        }
} 


export function getTeacherActionCreator(payload){
        return {type: GET_TEACHER, payload}
}

export function clearTeacherActionCreator(){
        return {type: CLEAR_TEACHER}
}


export function clearCurrentCourseActionCreator(){
        return {type: CLEAR_CURRENT_COURSE}
}

export function fetchCourses(category = 'development'){
        return async (dispatch) => {
                dispatch(notLoadingActionCreator())
               const response = await axios.post('http://45.67.59.112:8080/course/allcourses', {category})
               const data = response.data
               const courses = data.courses
               dispatch(fetchCoursesActionCreator(courses))
               dispatch(isloadingActionCreator())

        }
}

export function fetchHomeCourses(){
        return async (dispatch) => {
                dispatch(notLoadingActionCreator())
             const response = await axios.get('http://45.67.59.112:8080/course/getallcourses')
             const data = response.data
             const courses = data.courses
             dispatch(homeCoursesActionCreator(courses))
             dispatch(isloadingActionCreator())
              
        }
}

export function homeCoursesActionCreator(payload) {
        return {type: FETCH_HOME_COURSES, payload}
}



export function getCurrentCategoryActionCreator(category){
        return {type: GET_CURRENT_CATEGORY, category}
}

export function fetchCoursesActionCreator(payload){
        return {
                type: FETCH_COURSES,
                payload
        }
}

export function isloadingActionCreator(){
        return{ type: IS_LOADING}
}

export function notLoadingActionCreator(){
        return{ type: NOT_LOADING}
}