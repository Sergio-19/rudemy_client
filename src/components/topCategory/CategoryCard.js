import React from 'react'


const CategoryCard = ({img, title}) => {
    return(
        <div className='category_card'>
                <div className='category_card_img'>
                    <img src={img} alt = "category"/>
                </div>
                <div className='category_card_text'>
                    <h3>{title}</h3>
                </div>
            </div>
    )
}

export default CategoryCard;