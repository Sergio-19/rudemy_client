import axios from 'axios'
import { fetchMyCourses } from './mycoursesReducer';


const initialState = {

    formControls: {
        email: {
                name: 'email',
                value: '',
                type: 'email',
                errorMessage: 'Введите корректный E-mail',
                valid: false,
                touched: false,
                validation: {required: true,
                    email: true}
        },

        password: {
                name: 'password',
                value: '',
                type: 'password',
                errorMessage: 'Длина пароля не менее 8 символов',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 8
                }
            
        },

        userName: {
                name: 'userName',
                value: '',
                type: 'text',
                placeholder: 'Ваше имя',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    length: 3}
                },
            },
serverMessage: '',
user: {},
token: ''


}


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };





function validator(value, validation){
    
    let isValid = true
    if(validation.required){
            isValid = value.trim() !== '' && isValid
    }
    if(validation.minLength){
            isValid = value.length >= 8 && isValid
    }

    if(validation.email){
            isValid = validateEmail(value) && isValid
    }
    if(validation.min){
            isValid = value >= 18
    }
    if(validation.length){
            isValid = value.length >= 3
    }

    return isValid
}





export function loginReducer(state = initialState, action) {
        switch(action.type) {
            case CHANGE_INPUT:
                const formControls = {...state.formControls}
                const validation = formControls[action.name].validation 
                formControls[action.name].value = action.value
                formControls[action.name].valid = validator(action.value, validation)
                formControls[action.name].touched = action.value.length > 0 ? true : false
                        return{...state, formControls}

            case CHANGE_MESSAGE:
                        return {...state, serverMessage: action.message} 
            case GET_USER:
                        return {...state, user: action.payload}
                        
            case GET_TOKEN:
                        return {...state, token: action.payload}            
                        
                        
            default: 
                return state
        }
}


export const CHANGE_INPUT = 'CHANGE_INPUT'
export const CHANGE_MESSAGE = 'CHANGE_MESSAGE'
export const CLEAR_STATE = 'CLEAR_STATE'

export const GET_USER = 'GET_USER'
export const GET_TOKEN = 'GET_TOKEN'

export function userActionCreator(payload) {
    return {type: GET_USER, payload}
}

export function tokenActionCreator(payload) {
    return {type: GET_TOKEN, payload}
}


export function serverMessageActionCreator(message){
    return {type: CHANGE_MESSAGE, message}
}

export function changeInputActionCreator(value, name){
    return{
            type: CHANGE_INPUT,
            value,
            name
    }
}

export function clearStateActionCreator() {
    return {type: CLEAR_STATE}
}

function generatePassword(passLength){
    let length = passLength,
      charset = "abcdefghijklmnopqrstuvwxyzabcdefhhijklmnopqrstuvwxyz0123456789";
      let res = '';
      for (let i = 0, n = charset.length; i < length; ++i) {
          res += charset.charAt(Math.floor(Math.random() * n));
      }
      return res;
  }

  

  function relocation(){
      setTimeout(()=> {
        window.location.href = '/'
      }, 1000)
  }


export function signUpAction(email, password, name) {
    return async (dispatch) => {
        
     let userId = `user_ID_${generatePassword(14)}`

    try{
        const response = await axios.post('http://localhost:5000/auth/registration', {email, password, name, userId})
        dispatch(serverMessageActionCreator(response.data.message))
        if(response.data.token){
            const res = await axios.post('http://localhost:5000/auth/login', {email, password})
            const data = res.data
            dispatch(serverMessageActionCreator(data.message))
            if(data.token){
                console.log(data)
            localStorage.setItem('token', data.token)
            localStorage.setItem('userId', data.user.userId)

            relocation()
           

            
            }
        }
        
    } catch(e) {
        console.log(e)
    }

    }

}

export function signInAction(email, password) {
    return async (dispatch) => {

        try{    const response = await axios.post('http://localhost:5000/auth/login', {email, password})
                const data = response.data
                dispatch(serverMessageActionCreator(data.message))
                if(data.token){
                    localStorage.setItem('token', data.token)
                    localStorage.setItem('userId', data.user.userId)

                    relocation()

                }

        } catch(e) { console.log(e)}
    }
}

export function fetchPrivate(userId, token) {
        return async (dispatch) => {
            const response = await axios.post('http://localhost:5000/auth/person/user', {userId})
            const data = response.data
            if(data.user){
                const user = data.user
              dispatch(userActionCreator(user))
            dispatch(tokenActionCreator(token))
                
            const coursesArray = String(user.courseList).split('#') 
             dispatch(fetchMyCourses(coursesArray))   


            } else {
                console.log(data.message)
            }
            

        }


}

