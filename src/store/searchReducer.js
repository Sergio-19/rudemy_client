import axios from 'axios'
import { fetchCoursesActionCreator, getCurrentCategoryActionCreator, isloadingActionCreator, notLoadingActionCreator } from './mainReducer'



const initialState = {
    query: ''
}



export function searchReducer(state = initialState, action) {
        switch(action.type) {

            case NEW_QUERY:
                return{...state, query: action.payload}

            case CLEAR_QUERY:
                return {...state, query: ''}    


            default:
                return state
        }
}


const NEW_QUERY = 'NEW_QUERY'
const CLEAR_QUERY = 'CLEAR_QUERY'


export function newQueryActionCreator(payload) {
        return {type: NEW_QUERY, payload}
}

export function clearQueryActionCreator() {
    return {type: CLEAR_QUERY}
}


export function changeQueryInput(value){
    return async (dispatch) => {
        dispatch(newQueryActionCreator(value))
    }
}

export function getSearch(value) {
    return async (dispatch) => {
        const query = value
        try{
            dispatch(notLoadingActionCreator())
            const response = await axios.post( 'http://localhost:5000/course/search', {query})
            if(response.data.courses){
                dispatch(fetchCoursesActionCreator(response.data.courses))
            dispatch(isloadingActionCreator())
            }
            if(response.data.message){
                dispatch(notLoadingActionCreator())
            }
            dispatch(clearQueryActionCreator())
        } catch(e) {
            console.log(e)
        }
    }
}


export function postSearchQuery(event) {
     return async (dispatch) => {
        if(event.code === 'Enter') {
            const query = event.target.value
            try{
                dispatch(notLoadingActionCreator())
                const response = await axios.post( 'http://45.67.59.112:8080/course/search', {query})
                if(response.data.courses){
                    dispatch(fetchCoursesActionCreator(response.data.courses))
                dispatch(isloadingActionCreator())
                dispatch(newQueryActionCreator(event.target.value))
                }
                if(response.data.message){
                    dispatch(notLoadingActionCreator())
                }
                event.target.value = ''
            } catch(e) {
                console.log(e)
            }
        }
        dispatch({type: 'test'})
     }
}