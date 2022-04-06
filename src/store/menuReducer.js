
const initialState = {
    showMenu: false
}



    export function menuReducer(state = initialState, action) {
                switch(action.type) {
                    case SHOW_MENU:
                        return {...state, showMenu: true}
                    case HIDE_MENU:
                        return {...state, showMenu: false}


                  default:
                return state   
                }
            } 
            
         export const SHOW_MENU = 'SHOW_MENU'  
         export const HIDE_MENU = 'HIDE_MENU' 
         
         export function showMenuActionCreator() {
             return {type: SHOW_MENU}
         }

         export function hideMenu() {
             return async (dispatch) => {
                 await setTimeout(()=>{
                    dispatch(hideMenuActionCreator())
                 }, 0)
             }
         }

         export function hideMenuActionCreator() {
            return {type: HIDE_MENU}
        }