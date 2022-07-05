import axios from 'axios'

const initialState = {
    payment: {}
}




export function paymentReducer(state = initialState, action) {
        switch(action.type) {
            case NEW_PAYMENT:
                return {...state, payment: action.payload}

            case CLEAR_PAYMENT:
                return {...state, payment: {}}    



            default:
                return state
        }
}

const NEW_PAYMENT = 'NEW_PAYMENT'
const CLEAR_PAYMENT = 'CLEAR_PAYMENT'

export function newPaymentActionCreator(payload){
    return {type: NEW_PAYMENT, payload}
}

export function clearPaymentActionCreator(){
    return {type: CLEAR_PAYMENT}
}

export function postPayment(email, userId, courseList, fullname, courseId, price){
    return async (dispatch) => {
        let newDate = String(`${new Date().getUTCDate()}.${new Date().getUTCMonth() + 1}.${new Date().getUTCFullYear()}`)
        const payment = {email, userId, courseList, fullname, courseId, price, read: false, date: newDate}
        await axios.post(`https://rudemy-510b2-default-rtdb.firebaseio.com/payments.json`, payment)
        window.location.href = 'https://www.blitzscript.ru/payment'

        dispatch(newPaymentActionCreator(payment))
    }
}