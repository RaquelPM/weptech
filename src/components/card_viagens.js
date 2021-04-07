import React, { useState} from 'react'

import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineCheck } from 'react-icons/ai'

import green from '../media/green.svg'
import red from '../media/red.svg'

function Card_viagens(props){

    const [card, setCard] = useState(false);

    const listCards = props.pontos.map((ponto)=>
        <div className="d-flex mt-4 aux_my32 aux_mxl24">
            {ponto.status &&  <img alt="status" src={green} className="icon_p aux_mxr16" />}
            {!ponto.status && <img alt="status" src={red} className="icon_p aux_mxr16" />}
            <p className="text_16 line_18" >{ponto.nome}</p>
        </div>
    )

    return(
        <div className={` w90 card d-flex flex-column mb-3 align-items-center ${card && 'Card_down'} ${!card && 'Card_up_viagens'}` }>
            <div className="w-100 d-flex align-items-center aux_my48 mt-2">
                { card &&  <AiFillMinusCircle onClick={()=>setCard(!card)} class="icon_p_viagens aux_mxl24 aux_mxr24" />}
                { !card &&  <AiFillPlusCircle onClick={()=>setCard(!card)} class="icon_p_viagens aux_mxl24 aux_mxr24"/>}
                <p class="text_16 text_grey title_viagens line_18_cell">{`${props.motorista} - ${props.local} - ${props.desembarque}`}</p>
            </div>
            <div className="d-flex input_pontos w-100">
                <div className="d-flex flex-column align-items-start input_viagens aux_mxl24 ">
                    <label for="local" className="text_16 text_grey mb-3 ml-2" >Embarque</label>
                    <input id="local" type="text" value={props.local} disabled className="input_dark px-4 w-100 aux_my32"/>

                    <label for="desembarque" className="text_16 text_grey mb-3 ml-2" >Desembarque</label>
                    <input type="text" value={props.desembarque} disabled className="input_dark px-4 w-100 aux_my32"/>

                    <label for="motorista" className="text_16 text_grey mb-3 ml-2" >Motorista</label>

                    <input type="text" value={props.motorista} disabled className="input_dark px-4 w-100 aux_my16"/>
                </div>
                <div className="aux_mxr16 mt-2 d-flex justify-content-center flex-column">
                    {listCards}
                </div>
            </div>
            <div className="d-flex w-100 justify-content-center align-items-center aux_my16 btns_viagens">
                <button className="text_16 finalizar btn_p">
                    Finalizar
                    <AiOutlineCheck className="ml-1 mb-1 icon_p"/>
                </button>
                <button className="editar text_16 text_grey">Trocar motorista</button>
                <button className="desativar text_16 text-white">CANCELAR</button>
            </div>
        </div>
    )
}

export default Card_viagens