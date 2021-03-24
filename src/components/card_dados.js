import React, { useState } from 'react'

import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai'

function Card(props){

    const [card, setCard] = useState(false);

    return(
        <div className={`w-75 card_dados d-flex flex-column mb-3 align-items-center ${card && 'Card_down'} ${!card && 'Card_up'}` }>
            <div className="w-100 d-flex align-items-center aux_my48 mt-2">
                { card &&  <AiFillMinusCircle onClick={()=>setCard(!card)} class="icon_p aux_mxl24 aux_mxr24 bg-roxo" />}
                { !card &&  <AiFillPlusCircle onClick={()=>setCard(!card)} class="icon_p aux_mxl24 aux_mxr24"/>}
                <p class="text_16 text_grey mt-3">{props.nome}</p>
            </div>
            <div className="d-flex flex-column align-items-start w-75">
                { !props.relatorio && <label for="nome" className="text_16 text_grey mb-3 ml-2" >Nome</label>}
                { props.relatorio && <label for="nome" className="text_16 text_grey mb-3 ml-2" >Viagens Realizadas</label>}

                <input type="text" id="nome" placeholder={props.input1} disabled className="input_dark px-4 w-100 aux_my25"/>

                { !props.relatorio && <label for="nome" className="text_16 text_grey mb-3 ml-2" >Telefone</label>}
                { props.relatorio && <label for="nome" className="text_16 text_grey mb-3 ml-2" >Valor das corridas</label>}

                <input type="number" id="nome" placeholder={props.input2} disabled className="input_dark px-4 w-100 aux_my25"/>

                { !props.relatorio && <label for="nome" className="text_16 text_grey mb-3 ml-2" >Status</label>}
                { props.relatorio && <label for="nome" className="text_16 text_grey mb-3 ml-2" >A receber</label>}

                <input type="text" id="nome" placeholder={props.input3} disabled className="input_dark px-4 w-100 aux_my16"/>
            </div>
            {
                !props.relatorio &&
                <div className="d-flex w-75 justify-content-center">
                    <button className="editar aux_mxr24 text_16 text_grey w-25">Editar</button>
                    <button className="desativar aux_my16 text_16 text-white w-25">DESATIVAR</button>
                </div>
            }
        </div>
    )
}

export default Card