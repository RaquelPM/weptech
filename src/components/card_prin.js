import React from 'react'

function Card_p(props){
    return(
        <div className="w-100 bg-white d-flex text_20 align-items-center mb-3">
            <p id="title_card_prin" className="aux_mxl95 aux_mxr95 text_grey mt-1">{props.title}</p>
            <div id="linhav" className="my-3 aux_mxr20"></div>
            <p className="text_40 mt-2">{props.valor}</p>
        </div>
    )
}

export default Card_p