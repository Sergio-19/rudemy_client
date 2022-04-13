import React, {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom'
import "./styles/app.scss";
import Header from "./components/header/Header";
import Layout from "./components/layout/Layout";
import Burger from './components/navigation/Burger';
import Footer from './components/footer/Footer';
import Menu from './components/menu/Menu';
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import CoursePage from './pages/CoursePage';
import SignInPage from './pages/SignInPage'
import SignUpPage from './pages/SignUpPage'
import BuyNow from './components/buyNow/BuyNow';
import { useDispatch, useSelector } from 'react-redux';
import {fetchHomeCourses, fetchCourses, getCurrentCategoryActionCreator, getCurrentCourseHome, getCurrentCourses } from './store/mainReducer';
import MyLoader from './components/loader/MyLoader';
import { hideMenu, showMenuActionCreator } from './store/menuReducer';
import Navigation from './components/navigation/Navigation';
import { navOpenActionCreator } from './store/navigationReducer';
import { changeInputActionCreator, fetchPrivate, signInAction, signUpAction } from './store/loginReducer';
import EducationPage from './pages/EducationPage';
import { courseTitleActionCreator, currentLessonActionCreator, fetchLessons, fetchMyCourses } from './store/mycoursesReducer';
import MyCourse from './pages/MyCourse';
import { changeQueryInput, getSearch, postSearchQuery } from './store/searchReducer';



function App() {

  const dispatch = useDispatch()

  const {homeCourses, categories, currentCategory, loading, currentCourse, teacher, courses} = useSelector((state)=> state.mainReducer)
  const {showMenu} = useSelector((state)=> state.menuReducer)
  const {navIsOpen} = useSelector((state)=> state.navigationReducer)
  const {formControls, serverMessage, user} = useSelector((state)=> state.loginReducer)
  const tokenState = useSelector((state)=> state.loginReducer.token)
  const userId = localStorage.getItem('userId') || 'user_id_23456'
  const token = localStorage.getItem('token') || ''

  const myCourses = useSelector((state)=> state.mycoursesReducer.courses)
  const myLoading = useSelector((state)=> state.mycoursesReducer.loading)
  const {lessons, courseTitle, currentLesson} = useSelector((state) => state.mycoursesReducer)

  const {query} = useSelector((state)=> state.searchReducer)


  function fetchLessonsHandler(courseId, fullname){
    dispatch(fetchLessons(courseId))
    dispatch(courseTitleActionCreator(fullname))
  }

  function currentLessonHandler(name){
    dispatch(currentLessonActionCreator(name))
  }

  function changeInputHandler(value, name) {
     dispatch(changeInputActionCreator(value, name))
  }

  function signupHandler(email, password, name){
      dispatch(signUpAction(email, password, name))
  }

  function signinHandler(email, password) {
    dispatch(signInAction(email, password))
  }


  function navIsOpenHandler() {
     dispatch(navOpenActionCreator())
  }

  function showMenuHandler() {
    dispatch(showMenuActionCreator())
  }

  function hideMenuHandler() {
    dispatch(hideMenu())
  }

  function getCoursesHandler(category) {
    dispatch(getCurrentCategoryActionCreator(category))
    dispatch(fetchCourses(category))
}

function getCurrentCourseHomeHandler(courseId, authorId){
    dispatch(getCurrentCourseHome(courseId, authorId))
}


function navGetCoursesHandler(category) {
  dispatch(getCurrentCategoryActionCreator(category))
  dispatch(fetchCourses(category))
  dispatch(navOpenActionCreator())
}

function changeSearchHandler(event) {
  dispatch(changeQueryInput(event.target.value))
}

function postKey(event) {
  dispatch(postSearchQuery(event))
}

function searchHandler(value) {
  dispatch(getSearch(value))
}



useEffect(()=>{
  dispatch(fetchHomeCourses())
  dispatch(fetchPrivate(userId, token))
}, [])


  return (
    <>
      {/* <BuyNow /> */}
      <Burger navIsOpenHandler = {navIsOpenHandler}/>
      <Navigation navIsOpen = {navIsOpen} 
                  navGetCoursesHandler = {navGetCoursesHandler} 
                  navIsOpenHandler = {navIsOpenHandler}
                  tokenState = {tokenState}
                  />
      <Menu showMenu = {showMenu} 
            showMenuHandler = {showMenuHandler} 
            hideMenuHandler = {hideMenuHandler} 
            currentCategory = {currentCategory}
            getCoursesHandler = {getCoursesHandler}
            />
      <Header showMenuHandler = {showMenuHandler} 
              hideMenuHandler = {hideMenuHandler}
              tokenState = {tokenState}
              changeSearchHandler = {changeSearchHandler}
              searchHandler = {searchHandler}
              postKey = {postKey}
              query = {query}
              />
      {homeCourses.length > 0 && loading?
        <Layout>
        <Routes>
          <Route path = "/" exact element = {<HomePage homeCourses = {homeCourses}
                                                 getCurrentCourseHomeHandler = {getCurrentCourseHomeHandler}
                                                 teacher = {teacher}
          />} />
          <Route path = "/courses" element = {<CoursesPage  categories = {categories} 
                                                            currentCategory = {currentCategory}
                                                            courses = {courses}
                                                            loading = {loading}
                                                            teacher = {teacher}
                                                            query = {query}
                                                          
                                                            />} />
          <Route path = "/course" element = {<CoursePage  currentCourse = {currentCourse} 
                                                          teacher = {teacher}/>} />

          <Route path = "/signin" element = {<SignInPage  formControls = {formControls} 
                                                          changeInputHandler = {changeInputHandler}
                                                          serverMessage = {serverMessage} 
                                                          signinHandler = {signinHandler}
                                                          />} /> 
          <Route path = "/signup" element = {<SignUpPage  formControls = {formControls} 
                                                          serverMessage = {serverMessage}  
                                                          changeInputHandler = {changeInputHandler}
                                                          signupHandler = {signupHandler}
                                                          />} />  
          <Route path = '/education' element = { <EducationPage user = {user}
                                                                myCourses = {myCourses}
                                                                myLoading = {myLoading}
                                                                lessons = {lessons}
                                                                fetchLessonsHandler = {fetchLessonsHandler}
         
                                                   />} />   
          <Route path = '/mycourse' element = {<MyCourse  lessons = {lessons}
                                                          courseTitle = {courseTitle}
                                                          currentLesson = {currentLesson}
                                                          currentLessonHandler = {currentLessonHandler}
                                                          />} />                                                                                               
        </Routes>  
      </Layout> :
      <MyLoader />
      }
      <Footer />

    </> 
  );
}

export default App;
