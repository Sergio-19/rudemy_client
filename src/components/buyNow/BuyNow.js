import React from 'react'



const BuyNow = () => {

    return(
        <div className='buy_now'>
            <div className='buy_now_head'>
                <h3>Полный курс по Javascript + React</h3>
                <div className='buy_now_rating'>
                    <span>4,8</span>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                    <i className='fa fa-star'/>
                </div>
            </div>

            <div className='buy_now_buy'>
                <div className='buy_now_price'>
                    <span>1290 руб.</span><br/>
                    <small>5490 руб.</small>
                </div>

                <div className='buy_now_btn'>
                    <a href='/'>Оплатить Курс</a>
                </div>

            </div>

        </div>
    )
}

export default BuyNow;