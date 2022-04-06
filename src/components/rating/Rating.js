import React from 'react'



const Rating = ({rating}) => {

    let num = Math.round(rating)
   let ratingArr = new Array(num || 1).fill('') 
 





    return(
        <span className='rating_component'>
            {ratingArr.map((item, i)=> {
                return(
                  <i className="fa fa-star" key = {i}/>  
                )
            })}
                    
             
                
                </span>
    )
}


export default Rating