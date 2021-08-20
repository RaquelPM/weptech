import  React, { useState } from 'react'

import '../style/App.css'
import '../style/Pages.css'

import { AiOutlineSearch } from 'react-icons/ai'
import { FiArrowRightCircle } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { API_config } from '../consts'

function Config_bairro(){

    const [bairros] = useState(API_config);

    const listCards = bairros.map((bairro)=>
        <Link key={bairro.id}  to={{pathname:"/configurações/bairro/pontos", state:bairro.id}} className="w90 d-flex caard align-items-center aux_my32">
            <FiArrowRightCircle className="icon_p mx-3"/>
            <p className="text_16 bold text_grey mt-3">{bairro.nome}</p>
        </Link>
    )

    return(
        <div className="w-100 d-flex flex-column align-items-center page">
            
            <div className="w-100 d-flex justify-content-end">
                <Link to={'/'} className="d-flex Option justify-content-center align-items-center btn_p mt-4 mr-4 text_16">SAIR</Link>
            </div>
            <div className="title_div d-flex w-75 mt-4 aux_my60 title_div_config">
                <p className="text_32 text_grey aux_mxr20">Configurações</p>
                <div className="d-flex align-content-center mt-1">
                    <FiArrowRightCircle className="icon_title aux_mxr20 mb-3"/>
                    <p className="text_32 text_grey line_30_to_18 mt-1">Bairros</p>
                </div>
            </div>
            <div className="d-flex aux_my32 align-items-center search_div">
                <AiOutlineSearch className="icon_p my-3 icon_search"/>
                <input type="search" className="search w-75"/>
            </div>
            <button className="adicionar text-white aux_my32" >Adicionar Bairro</button>
            {listCards}
        </div>
    )
}

export default Config_bairro