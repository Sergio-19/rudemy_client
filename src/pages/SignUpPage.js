import React from 'react'




const SignUpPage = ({formControls, changeInputHandler, signupHandler, serverMessage}) => {

    const cl = []
    const classes = []
    const clName = []


 

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

    if(formControls.userName.valid && formControls.userName.touched){
        clName.push('input_name_valid')
    }

    if(!formControls.userName.valid && formControls.userName.touched){
        clName.push('input_name_invalid')
}

function desable(x, y, z) {
    let bool = true
    if(x && y && z){
        bool = false
    }

    return bool
}



    return(
        <div className='registration_wrap'>
            <div className='registration_head'>
                <h3>
                    Зарегистрируйтесь и начните обучение!
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

                <input className= {clName.join(' ')}              
                       type = 'text' 
                       name = 'userName' 
                       placeholder='Ваше имя' 
                       defaultValue={formControls.userName.value}
                       onChange = {(event) => changeInputHandler(event.target.value, event.target.name)}
                       />       

            </div>

          {serverMessage !== '' ?   
                <h4 className='server_message'>{serverMessage}</h4>
                 : <></>}

            <div className='registration_btn_wrap'>
                    <button disabled = {desable(formControls.email.valid, formControls.password.valid, formControls.userName.valid,)}
                            onClick = {()=> signupHandler(formControls.email.value, formControls.password.value, formControls.userName.value)}
                    >Регистрация</button>
            </div>
        </div>
    )
}

export default SignUpPage;