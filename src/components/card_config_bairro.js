import React, { useState } from 'react'

import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'
import check from '../media/check.svg'

import '../style/Components.css'

function Card_config(props){

    const [card, setCard] = useState(false);
    const [h, setH] = useState('xx:xx');

    const [horarios] = useState(props.horarios);

    const [nome, setNome] = useState(props.nome);
    const [referencia, setReferencia] = useState(props.referencia);
    const [radio, setRadio] = useState(props.tipo);
    const [horario, setHorario] = useState();
    

    const listHorarios = horarios.map((hora)=>
        <div key={horarios.indexOf(hora)} onMouseEnter={()=>setH(hora)} onMouseLeave={()=> setH('xx:xx')} className="clicavel d-flex div_horario input_dark ml-1 justify-content-center align-items-center px-4 mt-1">
            {h !== hora && <p className="mt-3" onClick={()=>setH(hora)}>{hora}</p>}
            {h === hora && <p className="mt-3" onClick={()=> {horarios.splice(horarios.indexOf(hora), 1); setH('xx:xx')}}>X</p>}
        </div>
    )
    
    return(
        <div className={`w90 card d-flex flex-column mb-3 align-items-center ${card && 'Card_down'} ${!card && 'Card_up_viagens'}` }>
            <div className="w-100 d-flex align-items-center aux_my48 mt-2">
                { card &&  <AiFillMinusCircle onClick={()=>setCard(!card)} class="icon_p aux_mxl24 aux_mxr24 bg-roxo" />}
                { !card &&  <AiFillPlusCircle onClick={()=>setCard(!card)} class="icon_p aux_mxl24 aux_mxr24"/>}
                <p class="text_16 text_grey title_viagens line_18_cell">Ponto {props.ponto} - "{nome}"</p>
            </div>

            <div className="d-flex flex-column align-items-center w-100">
                <form onSubmit={(e)=>{e.preventDefault(); props.attPonto(props.ponto-1, radio, nome, referencia, horarios)}} className="w90 aux_mxl24 aux_mxr24">
                    <div className="d-flex aux_my32 align-items-center ml-2 text_grey text_16" onChange={(e)=>setRadio(e.target.value)}>
                        <label className="radio">
                            <input type="radio" name="radio" value="dominante" className="aux_mxr24 radio"/>
                            {radio === 'dominante' && <img src={check} alt="check"/>}
                        </label>
                        <p className="aux_mxr32 mt-3 aux_mxl24">Dominante</p>
                        <label className="radio">
                            <input type="radio" name="radio" value="secundario" className="aux_mxr24 radio"/>
                            {radio === 'secundario' && <img src={check} alt="check"/>}
                        </label>
                        <p className="mt-3 aux_mxl24">Secundário</p>
                    </div>

                    <div className="d-flex aux_my48 input_pontos">
                        <div className="d-flex flex-column input_card_config_bairro">
                            <label className="text_16 text_grey mb-3 ml-2" >Rua</label>
                            <input required type="text" value={nome} maxLength="70" onChange={(e)=>{setNome(e.target.value)}} className="input_dark px-4 w-100"/>
                        </div>
                        <div className="d-flex flex-column input_card_config_bairro input_card_config_bairro_left">
                            <label className="text_16 text_grey mb-3 ml-2" >Ponto de referência</label>
                            <input required type="text" value={referencia} onChange={(e)=>{setReferencia(e.target.value)}} className="input_dark px-4 w-100"/>
                        </div>
                    </div>

                    <div className="d-flex aux_my48 justify-content-center align-items-center input_pontos">
                        <div className="d-flex align-items-center mt-1">
                            <label className="text_16 text_grey aux_mxr16" >Horário</label>
                            <input type="time" placeholder="__:__" value={horario} onChange={(e)=>{setHorario(e.target.value)}} className="input_dark pl-3 pr-2 input_horario aux_mxr16"/>
                            <button type="button" className="btn_horario aux_mxr16" onClick={()=>{if(horario)horarios.push(horario); setHorario('')}}><p className="mt-3">+</p></button>
                        </div>

                        <div className="d-flex horarios align-items-center justify-content-center">
                            {listHorarios}
                        </div>
                    </div>


                    <div className="d-flex justify-content-center div_btns aux_my16 align-items-center">
                        <button className="adicionar text_16">Salvar</button>
                        <button onClick={(e)=>{e.preventDefault(); props.setModal(true);localStorage.setItem('index', props.ponto-1)}} className="desativar text_16 text-white">EXCLUIR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Card_config