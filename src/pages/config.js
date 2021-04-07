import  React, { useEffect } from 'react'
import { useHistory } from "react-router-dom";

import '../style/App.css'
import '../style/Pages.css'

import { FiArrowRightCircle } from 'react-icons/fi'

import Card from '../components/card_config'

import useConfig from '../hooks/useConfig'

function Config(){

    const history = useHistory()

    const [bairro, attPonto] = useConfig();

    const listCards = bairro.pontos.map((ponto)=>
        <Card 
            ponto={ponto.id + 1}
            nome={ponto.nome}
            valor={ponto.valor}
            horarios={ponto.horarios}
            tipo={ponto.tipo}
            attPonto={attPonto}
        />
    )

    useEffect(() => {
        console.log(bairro)
      });
    
    return(
        <div className="w-100 d-flex flex-column align-items-center page">
            <div className="w-100 d-flex justify-content-end">
                <button className="btn_p mt-4 mr-4 text_16">SAIR</button>
            </div>
            <div className="title_div d-flex w-75 mt-4 aux_my60 title_div_config">
                <p className="text_32 text_grey aux_mxr20">Configurações</p>
                <div className="d-flex align-content-center mt-1">
                    <FiArrowRightCircle className="icon_title aux_mxr20 mb-3"/>
                    <p className="text_32 text_grey line_30_to_18 mt-1">{bairro.nome}</p>
                </div>
            </div>
            <div className="d-flex aux_my32 justify-content-center div_btns">
                <button onClick={(e)=>{e.preventDefault(); history.goBack()}} className="bg-white editar  w-25">Voltar</button>
                <button className="finalizar btn_p text-white w-25">Adicionar</button>
            </div>
            {listCards}
        </div>
    )
}

export default Config