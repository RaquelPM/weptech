import React, { useState } from 'react'

import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import { CgArrowsExchangeAlt } from "react-icons/cg"

import SelectConfig from './select_config'

import '../style/Components.css'

function Card_config(props){

    const [card, setCard] = useState(false);
    const [bairro1, setBairro1] = useState(props.bairro1);
    const [bairro2, setBairro2] = useState(props.bairro2);
    const [price, setPrice] = useState(props.price);
    const [tempo, setTime] = useState(props.tempo);
    const [id] = useState(props.id)
    
    return(
        <div className={`w90 card d-flex flex-column mb-3 align-items-center ${card && 'Card_down'} ${!card && 'Card_up_viagens'}` }>
            <div className="w-100 d-flex align-items-center aux_my32 mt-2">
                { card &&  <AiFillMinusCircle onClick={()=>setCard(!card)} className="icon_p aux_mxl24 aux_mxr24 bg-roxo" />}
                { !card &&  <AiFillPlusCircle onClick={()=>setCard(!card)} className="icon_p aux_mxl24 aux_mxr24"/>}
                <p className="text_16 text_grey title_viagens line_18_cell">Rota {id+1} - {bairro1} - {bairro2}</p>
            </div>

            <form className="w-100" onSubmit={(e)=>{e.preventDefault(); props.updateRota(id, bairro1, bairro2, price, tempo)}}>
                <div className="d-flex text_14 text-gray w-100 px-5 aux_my32_temp div_btns">
                    <div className="d-flex flex-column w50_temp">
                        <p className="w100_temp">Bairro 1:</p>
                        <SelectConfig bairro={bairro1} setBairro={setBairro1}/>
                    </div>

                    <CgArrowsExchangeAlt className="icon_g mt-3 aux_mxl32 aux_mxr32"/>

                    <div className="d-flex flex-column w50_temp">
                        <p className="w100_temp">Bairro 2:</p>
                        <SelectConfig bairro={bairro2} setBairro={setBairro2}/>
                    </div>
                </div>

                <div className="d-flex align-items-center text_14 text-gray w-100 px-5 aux_my32 div_btns">
                    <p className="mt-3 w100_temp">Preço</p>
                    <input className="input_dark px-4 mb-2 w50_temp" placeholder="R$:" value={price} onChange={(e)=>setPrice(e.target.value)}/>

                    <div className="d-flex justify-content-center align-items-center div_btns w50_temp">
                        <p className="mt-3 mr-2">Tempo estimado de viagem:</p>
                        <div className="d-flex align-items-center">
                            <input type="time" placeholder="__:__" className="input_dark pl-3 pr-2 input_horario mr-3" value={tempo} onChange={(e)=>setTime(e.target.value)}/>
                            <p className="mt-3">{tempo}</p>
                        </div>
                    </div>
                </div>

                <div className="d-flex justify-content-center div_btns aux_my16 align-items-center">
                    <button type="submit" className="adicionar text_16">Salvar</button>
                    <button type="button" onClick={(e)=>{e.preventDefault(); props.setModal(true);localStorage.setItem('index', id)}} className="desativar text_16 text-white">EXCLUIR</button>
                </div>
            </form>

        </div>
    )
}

export default Card_config