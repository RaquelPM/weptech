import  React, { useState } from 'react'

import '../style/App.css'
import '../style/Pages.css'

import { AiOutlineSearch } from 'react-icons/ai'
import { FiArrowRightCircle } from 'react-icons/fi'

import { API_config_rotas } from '../consts'

import Modal from '../components/modal'

import { Link } from 'react-router-dom'

import Card from '../components/card_config_rotas'

import useRota from '../hooks/useConfigRota'

function Config_bairro(){

    const [rotas] = useState(API_config_rotas);

    const [updateRota, delRota] = useRota();
    const [modal, setModal] = useState(false)

    const listCards = rotas.map((rota)=>
        <Card 
            key={rota.id} 
            bairro1={rota.bairro1}
            bairro2={rota.bairro2}
            price={rota.price}
            tempo={rota.tempo}
            id={rota.id}
            updateRota={updateRota}
            delRota={delRota}
            setModal={setModal}
        />
    )

    return(
        <div className="w-100 d-flex flex-column align-items-center page">
            <Modal modal={modal} setModal={setModal} function={delRota}/>
            <div className="w-100 d-flex justify-content-end">
                <Link to={'/'} className="d-flex Option justify-content-center align-items-center btn_p mt-4 mr-4 text_16">SAIR</Link>
            </div>
            <div className="title_div d-flex w-75 mt-4 aux_my60 title_div_config">
                <p className="text_32 text_grey aux_mxr20">Configurações</p>
                <div className="d-flex align-content-center mt-1">
                    <FiArrowRightCircle className="icon_title aux_mxr20 mb-3"/>
                    <p className="text_32 text_grey line_30_to_18 mt-1">Rotas</p>
                </div>
            </div>
            <div className="d-flex aux_my32 align-items-center search_div">
                <AiOutlineSearch className="icon_p my-3 icon_search"/>
                <input type="search" className="search w-75"/>
            </div>
            <button className="adicionar text-white aux_my32" >Adicionar Rotas</button>
            {listCards}
        </div>
    )
}

export default Config_bairro