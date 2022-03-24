import React from 'react'


const Section2 = ({children, title}) => {
    return(
        <div className='section2'>
                <div className='section2_wrap'>
                    <div className='section2_head'>
                        <h2>{title}</h2>
                    </div>
                    <div className='section2_content' >
                        {children}
                    </div>
                </div>
                

            </div>
    )
}

export default Section2;