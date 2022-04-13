    import axios from 'axios'



    
const initialState = {
    courses: [],
    loading: false,
    lessons: [],
    courseTitle: '',
    currentLesson: ''
}


export function mycoursesReducer(state = initialState, action) {
    switch(action.type) {

                case FETCH_MY_COURSES:
                    return {...state, courses: action.payload}
                case MY_COURSES_IS_LOADING:
                    return {...state, loading: true}
                case MY_COURSES_NOT_LOADING:
                    return {...state, loading: false}   
                case FETCH_LESSONS:
                    return {...state, lessons: action.payload}  
                case GET_COURSE_TITLE:
                    return {...state, courseTitle: action.payload}   
                case GET_CURRENT_LESSON:
                    return {...state, currentLesson: action.payload}            



        default:
            return state
    }
}


const FETCH_MY_COURSES = 'FETCH_MY_COURSES'
const MY_COURSES_IS_LOADING = 'MY_COURSES_IS_LOADING'
const MY_COURSES_NOT_LOADING = 'MY_COURSES_NOT_LOADING'
const FETCH_LESSONS = 'FETCH_LESSONS'
const GET_COURSE_TITLE = 'GET_COURSE_TITLE'
const GET_CURRENT_LESSON = 'GET_CURRENT_LESSON'

export function currentLessonActionCreator(payload){
    return {type: GET_CURRENT_LESSON, payload}
}


export function courseTitleActionCreator(payload){
    return {type: GET_COURSE_TITLE, payload}
}


export function myCoursesIsLoading(){
    return {type: MY_COURSES_IS_LOADING}
}

export function myCoursesNotLoading() {
    return {type: MY_COURSES_NOT_LOADING}
}

export function fetchMyCoursesActionCreator(payload){
    return{type: FETCH_MY_COURSES, payload}
}

export function fetchMyCourses(coursesArray){
    return async (dispatch) => {
        const courses = []
            dispatch(myCoursesNotLoading())
           await coursesArray.forEach((courseId)=> {
                axios.post('http://45.67.59.112:8080/course/getcourse', {courseId: String(courseId).trim()}).
                then((response)=>{
                    if(response.data.course){
                        courses.push(response.data.course)
                    }
                } )
                
            })

            dispatch(fetchMyCoursesActionCreator(courses))
            dispatch(myCoursesIsLoading())

    }
}


export function fetchLessons(courseId){
    return async (dispatch) => {
       const response = await axios.post('http://45.67.59.112:8080/course/getlessons', {courseId})
        if(response.data.message){console.log(response.data.message)} else {
           const arr = response.data.lessons
          dispatch(getLessonsActionCreator(arr)) 
    }
}}

export function getLessonsActionCreator(payload) {
    return {type: FETCH_LESSONS, payload}
}

