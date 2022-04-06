
const initialState = {
    navIsOpen: false
}



export function navigationReducer(state = initialState, action) {
        switch(action.type) {
                case NAV_IS_OPEN:
                    return {...state, navIsOpen: !state.navIsOpen}



            default:
                return state
        }
}


export const NAV_IS_OPEN = 'NAV_IS_OPEN'


export function navOpenActionCreator() {
    return {type: NAV_IS_OPEN}
}