import React, { useState } from 'react'

import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineCheck } from 'react-icons/ai'

import green from '../media/green.svg'
import red from '../media/red.svg'

import useMoto from '../hooks/useMoto'

function Card_viagens(props){

    const [card, setCard] = useState(false);
    const [trocar, setTrocar] = useState(false);

    const [motorista, setMotorista] = useState(props.motorista);
    const [motoristas] = useMoto()

    const listPoint = props.pontos.map((ponto)=>
        <div className="d-flex mt-4 aux_my32 aux_mxl24">
            {ponto.status &&  <img alt="status" src={green} className="icon_p aux_mxr16" />}
            {!ponto.status && <img alt="status" src={red} className="icon_p aux_mxr16" />}
            <p className="text_16 line_18" >{ponto.nome}</p>
        </div>
    )

    const listMoto = motoristas.map((moto)=>
        <option value={moto.nome} className="option">{moto.nome}</option>
    )

    return(
        <div className={` w90 card d-flex flex-column mb-3 align-items-center ${card && 'Card_down'} ${!card && 'Card_up_viagens'}` }>
            <div className="w-100 d-flex align-items-center aux_my48 mt-2">
                { card &&  <AiFillMinusCircle onClick={()=>setCard(!card)} class="icon_p_viagens aux_mxl24 aux_mxr24" />}
                { !card &&  <AiFillPlusCircle onClick={()=>setCard(!card)} class="icon_p_viagens aux_mxl24 aux_mxr24"/>}
                <p class="text_16 text_grey title_viagens line_18_cell">{`${motorista} - ${props.local} - ${props.desembarque}`}</p>
            </div>
            <div className="d-flex input_pontos w-100 justify-content-center align-items-center">
                <div className="d-flex input_viagens flex-column align-items-start">
                    <label for="local" className="text_16 text_grey mb-3 ml-2" >Embarque</label>
                    <input id="local" type="text" value={props.local} disabled className="input_dark px-4 w-100 aux_my32"/>

                    <label for="desembarque" className="text_16 text_grey mb-3 ml-2" >Desembarque</label>
                    <input type="text" value={props.desembarque} disabled className="input_dark px-4 w-100 aux_my32"/>

                    <label for="motorista" className="text_16 text_grey mb-3 ml-2" >Motorista</label>


                    <div className="div_select w-100">
                        <select name="motorista" disabled={!trocar} className={`${trocar && 'w-100'} ${!trocar && 'w545'} input_dark select pl-2 aux_my16`} value={motorista} onChange={(e)=>{setMotorista(e.target.value)}}>
                            {listMoto}
                        </select>
                    </div>
                </div>
                <div className="point_viagens aux_mxr24 mt-2 d-flex justify-content-center flex-column">
                    {listPoint}
                </div>
            </div>
            <div className="d-flex w-100 justify-content-center align-items-center aux_my16 btns_viagens">
                <button onClick={()=>{props.setModal(true);localStorage.setItem('index', props.id)}} className="text_16 finalizar btn_p">
                    Finalizar
                    <AiOutlineCheck className="ml-1 mb-1 icon_p"/>
                </button>
                <button onClick={()=>{if(trocar)props.updateMotorista(props.id, motorista) ;setTrocar(!trocar)}} className="editar text_16 text_grey">{trocar && 'Salvar'}{!trocar && 'Trocar motorista'}</button>
                <button onClick={()=>{props.setModal(true);localStorage.setItem('index', props.id)}} className="desativar text_16 text-white">CANCELAR</button>
            </div>
        </div>
    )
}

export default Card_viagens