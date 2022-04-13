import {createStore, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { mainReducer } from './mainReducer'
import { menuReducer } from './menuReducer'
import { navigationReducer } from './navigationReducer'
import { loginReducer } from './loginReducer'
import { mycoursesReducer } from './mycoursesReducer'
import { searchReducer } from './searchReducer'

const rootReducer = combineReducers({mainReducer,
                                     menuReducer,
                                     navigationReducer,
                                     loginReducer,
                                     mycoursesReducer,
                                     searchReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))




export default store;