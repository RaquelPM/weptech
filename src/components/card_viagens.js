import React, { useState} from 'react'

import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineCheck } from 'react-icons/ai'

import green from '../media/green.svg'
import red from '../media/red.svg'

function Card_viagens(props){

    const [card, setCard] = useState(false);

    const listCards = props.pontos.map((ponto)=>
        <div className="d-flex mt-4 aux_my32">
            {ponto.status &&  <img alt="status" src={green} className="icon_p aux_mxr16" />}
            {!ponto.status && <img alt="status" src={red} className="icon_p aux_mxr16" />}
            <p className="text_16 line_18" >{ponto.nome}</p>
        </div>
    )

    return(
        <div className={` w90 card d-flex flex-column mb-3 align-items-center ${card && 'Card_down'} ${!card && 'Card_up'}` }>
            <div className="w-100 d-flex align-items-center aux_my48 mt-2">
                { card &&  <AiFillMinusCircle onClick={()=>setCard(!card)} class="icon_p aux_mxl24 aux_mxr24" />}
                { !card &&  <AiFillPlusCircle onClick={()=>setCard(!card)} class="icon_p aux_mxl24 aux_mxr24"/>}
                <p class="text_16 text_grey mt-3">{`${props.motorista} - ${props.local} - ${props.desembarque}`}</p>
            </div>
            <div className="d-flex w-100">
                <div className="d-flex flex-column align-items-start w60 aux_mxl24 aux_mxr24 ">
                    <label for="local" className="text_16 text_grey mb-3 ml-2" >Embarque</label>
                    <input id="local" type="text" value={props.local} disabled className="input_dark px-4 w-100 aux_my32"/>

                    <label for="desembarque" className="text_16 text_grey mb-3 ml-2" >Desembarque</label>
                    <input type="text" value={props.desembarque} disabled className="input_dark px-4 w-100 aux_my32"/>

                    <label for="motorista" className="text_16 text_grey mb-3 ml-2" >Motorista</label>

                    <input type="text" value={props.motorista} disabled className="input_dark px-4 w-100 aux_my16"/>
                </div>
                <div className="w40 aux_mxr16 mt-2 d-flex justify-content-center flex-column">
                    {listCards}
                </div>
            </div>
            <div className="d-flex w-100 justify-content-center">
                <button className="aux_mxr24 text_16 finalizar btn_p w-25">
                    Finalizar
                    <AiOutlineCheck className="ml-1 mb-1 icon_p"/>
                </button>
                <button className="editar aux_my16 aux_mxr24 text_16 text_grey w-25">Trocar motorista</button>
                <button className="desativar aux_my16 text_16 text-white w-25">CANCELAR</button>
            </div>
        </div>
    )
}

export default Card_viagens