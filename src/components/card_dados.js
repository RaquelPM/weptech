import React, { useState } from 'react'
import InputMask from 'react-input-mask';

import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

function Card(props){

    const [nome, setNome] = useState(props.nome);
    const [telefone, setTelefone] = useState(props.telefone);

    const [card, setCard] = useState(false);
    const [edit, setEdit] = useState(false);

    function submit(id, name, telefone){
        if(!edit){
            if(name && telefone){
                props.update(id,name,telefone);
                console.log(id, name, telefone);
            }
            else{alert('Está faltando informações');setEdit(true)}
        }
    }

    return(
        <div className={`w90 card d-flex flex-column mb-3 align-items-center ${card && 'Card_down'} ${!card && 'Card_up'}` }>
            <div className="w-100 d-flex align-items-center aux_my48 mt-2">
                { card &&  <AiFillMinusCircle onClick={()=>setCard(!card)} class="icon_p aux_mxl24 aux_mxr24 bg-roxo" />}
                { !card &&  <AiFillPlusCircle onClick={()=>setCard(!card)} class="icon_p aux_mxl24 aux_mxr24"/>}
                <p class="text_16 text_grey mt-3">{nome}</p>
            </div>
            <div className="d-flex flex-column align-items-start w-75">
                <form onSubmit={(e)=>{e.preventDefault(); submit(props.id, nome, telefone)}}>
                    { !props.relatorio && <label className="text_16 text_grey mb-3 ml-2" >Nome</label>}
                    { props.relatorio && <label className="text_16 text_grey mb-3 ml-2" >Viagens Realizadas</label>}

                    { !props.relatorio && <input type="text" value={nome} required maxLength="70" onChange={(e)=>{setNome(e.target.value)}} disabled={!edit} className="input_dark px-4 w-100 aux_my16"/>}
                    { props.relatorio && <input type="text" value={props.viagens} disabled className="input_dark px-4 w-100 aux_my16"/>}

                    { !props.relatorio && <label className="text_16 text_grey mb-3 ml-2" >Telefone</label>}
                    { props.relatorio && <label className="text_16 text_grey mb-3 ml-2" >Valor das corridas</label>}

                    { !props.relatorio &&  <InputMask mask="(99) 99999-9999" required type="tel" value={telefone} onChange={(e)=>{setTelefone(e.target.value)}} disabled={!edit} className="input_dark px-4 w-100 aux_my25"/>}
                    { props.relatorio &&  <input value={props.valor} disabled className="input_dark px-4 w-100 aux_my25"/>}

                    { !props.relatorio && <label className="text_16 text_grey mb-3 ml-2" >Status</label>}
                    { props.relatorio && <label className="text_16 text_grey mb-3 ml-2" >A receber</label>}

                    <input type="text" value={props.status || props.receber} disabled className="input_dark px-4 w-100 aux_my16"/>

                    {
                        !props.relatorio &&
                        <div className="d-flex w-100 justify-content-center div_btns aux_my16 align-items-center">
                            <button type="submit" onClick={()=>setEdit(!edit)} className="editar text_16 text_grey">{!edit && 'Editar'} { edit && 'Salvar'}</button>
                            <button type="button" onClick={()=>{props.setModal(true); localStorage.setItem('index', props.id)}} className="desativar text_16 text-white">DESATIVAR</button>
                        </div>
                    }
                </form>
            </div>
        </div>
    )
}

export default Card