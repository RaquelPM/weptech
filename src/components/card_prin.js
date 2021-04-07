import React from 'react'

function Card_p(props){
    return(
        <div className="d-flex w-100 flex-column align-items-start text_20">
            <p id="title_card_prin_cima" className="text_grey mt-3 line_18 ml-3">{props.title}</p>
            <div className="w-100 bg-white card_prin d-flex align-items-center">
                <p id="title_card_prin" className="text_grey mt-1">{props.title}</p>
                <div id="linhav" className="my-3"></div>
                <p className="text_40 mt-3">{props.valor}</p>
            </div>
        </div>
    )
}

export default Card_p