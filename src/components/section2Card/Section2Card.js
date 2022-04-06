import React from 'react'


const Section2Card = ({text}) => {
    return(
        <div className='section2_card'>
                        <div className='section2_card_check'><i className='fa fa-check'/></div>
                        <div className='section2_card_text'>
                            <p>
                            {text} 
                            </p>
                        </div>
                    </div>
    )
}

export default Section2Card;