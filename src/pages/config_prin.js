import  React from 'react'

import '../style/App.css'
import '../style/Pages.css'

import { AiOutlineSearch } from 'react-icons/ai'
import { FiArrowRightCircle } from 'react-icons/fi'

import { Link } from 'react-router-dom'

function Config_prin(){

    const API = [
        {
            id:0,
            nome:"Honório Bicalho",
        },
        {
            id:1,
            nome:"Centro de Nova Lima",
        }];

    const listCards = API.map((bairro)=>
        <Link to={{pathname:"/configurações/bairros", state:bairro.id}} className="w90 d-flex caard align-items-center aux_my32">
            <FiArrowRightCircle className="icon_p mx-3"/>
            <p className="text_16 bold text_grey mt-3">{bairro.nome}</p>
        </Link>
    )

    return(
        <div class="w-100 d-flex flex-column align-items-center">
            <div className="w-100 d-flex justify-content-end">
                <button className="btn_p mt-4 mr-5 text_16">SAIR</button>
            </div>
            <div className="title_div d-flex w-75 mt-4 aux_my60">
                <p className="text_32 text_grey">Configurações</p>
            </div>
            <div className="d-flex aux_my32 align-items-center w-50 search_div aux_mxr16">
                <AiOutlineSearch className="icon_p my-3 mx-5"/>
                <input type="search" className="search w-75 mr-4"/>
            </div>
            <button className="adicionar text-white aux_my32" >Adicionar Bairro</button>
            {listCards}
        </div>
    )
}

export default Config_prin