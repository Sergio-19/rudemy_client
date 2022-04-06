import React from 'react'



const SignInPage = ({formControls, changeInputHandler, serverMessage, signinHandler}) => {


    const cl = []
    const classes = []
 

    if(formControls.email.valid && formControls.email.touched){
        classes.push('input_email_valid')
    }

    if(formControls.password.valid && formControls.password.touched){
            cl.push('input_password_valid')
    }

    if(!formControls.email.valid && formControls.email.touched){
        classes.push('input_email_invalid')
    }

    if(!formControls.password.valid && formControls.password.touched){
            cl.push('input_password_invalid')
    }

    function desable(x, y, ) {
        let bool = true
        if(x && y){
            bool = false
        }

        return bool
    }



    return(
        <div className='registration_wrap'>
            <div className='registration_head'>
                <h3>
                    Войдите в учетную запись!
                </h3>
            </div>
            <div className='registration_input_wrap'>
                <input className= {classes.join(' ')} 
                       type = 'email' 
                       name = 'email' 
                       placeholder='Email'
                        defaultValue={formControls.email.value}
                        onChange = {(event) => changeInputHandler(event.target.value, event.target.name)}
                        />
                <input className= {cl.join(' ')}              
                       type = 'password' 
                       name = 'password' 
                       placeholder='Пароль' 
                       defaultValue={formControls.password.value}
                       onChange = {(event) => changeInputHandler(event.target.value, event.target.name)}
                       />

            </div>

            {serverMessage !== '' ?   
                <h4 className='server_message'>{serverMessage}</h4>
                 : <></>}

            <div className='registration_btn_wrap'>
                    <button disabled = {desable(formControls.email.valid, formControls.password.valid)}
                            onClick = {()=> signinHandler(formControls.email.value, formControls.password.value)}
                    >Войти</button>
            </div>
        </div>
    )
}



export default SignInPage;