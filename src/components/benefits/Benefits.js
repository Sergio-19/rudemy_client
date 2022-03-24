import React from 'react'


const Benefits = () => {

    return(
        <div className='benefits'>
            <div className='benefit'>
                <div className='benefit_round'>
                <i className="fa fa-play" />
                </div>
                <div className='benefit_text'>
                    <span>Изучайте востребованные навыки с помощью более <br/>183 000 видеокурсов</span>
                </div>
            </div>
            <div className='benefit'>
                <div className='benefit_round'>
                <i className="fa fa-star" />
                </div>
                <div className='benefit_text'>
                    <span>Выбирайте курсы от экспертов с реальным опытом</span>
                </div>
            </div>
            <div className='benefit'>
                <div className='benefit_round'>
                <i className="fa fa-laptop" />
                </div>
                <div className='benefit_text'>
                    <span>Учитесь в удобном темпе с помощью пожизненного доступа с мобильных устройств и ПК</span>
                </div>
            </div>

        </div>
    )
}

export default Benefits;