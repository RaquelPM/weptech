import  React from 'react'
import { Link } from 'react-router-dom'

import '../style/App.css'
import '../style/Pages.css'

import { IoLocationOutline } from "react-icons/io5"
import { CgArrowsExchangeAlt } from "react-icons/cg"
import { BiDollar } from 'react-icons/bi'

function Config(){


    return(
        <div class="w-100 d-flex flex-column align-items-center page">     
            <div className="w-100 d-flex justify-content-end">
            <Link to={'/'} className="d-flex Option justify-content-center align-items-center btn_p mt-4 mr-4 text_16">SAIR</Link>
            </div>
            <div className="title_div d-flex w-75 mt-3 aux_my60">
                <p className="text_32 text_grey aux_mxr20">Configurações</p>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center w-100 h-100 pb-5">
                <p className="text-gray">Selecione o que deseja configurar.</p>
                <div className="d-flex pb-5 flex_temp">
                    <Link to={"/configurações/bairro"} className="Option d-flex align-items-center justify-content-center finalizar btn_p aux_mxr24">
                        <p class="mt-3 mr-2">Bairros</p>
                        <IoLocationOutline className="icon_p"/>
                    </Link>

                    <Link to={"/configurações/rotas"} className="Option d-flex align-items-center justify-content-center finalizar btn_p aux_mxr24">
                        <p class="mt-3 mr-2">Rotas</p>
                        <CgArrowsExchangeAlt className="icon_p"/>
                    </Link>

                    <Link to={"/configurações/faturamento"} className="Option d-flex align-items-center justify-content-center finalizar btn_p aux_mxr24">
                        <p class="mt-3 mr-2">Faturamento</p>
                        <BiDollar className="icon_p"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Config