import React from 'react'


const Burger = ({navIsOpenHandler}) => {

    return(
        <div className='burger_wrap' onClick = {navIsOpenHandler}>
            <i className="fa fa-bars" />
        </div>
    )
}

export default Burger