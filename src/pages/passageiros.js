import  React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../style/App.css'
import '../style/Pages.css'

import Card from '../components/card_dados'
import Modal from '../components/modal'

import usePassa from '../hooks/usePassa'

import { AiOutlineSearch } from 'react-icons/ai'

function Passageiros(){
    const [passageiros, updatePassageiros, delPassageiros] = usePassa();
    const [modal, setModal] = useState(false);

    const listPassa = passageiros.map((passageiro)=>   
        <Card 
            key={passageiro.id}
            id={passageiro.id}
            nome={passageiro.nome} 
            telefone={passageiro.telefone} 
            status={passageiro.status}
            update={updatePassageiros}
            setModal={setModal}
        />
    )
    return(
        <div className="w-100 page d-flex flex-column align-items-center">
            <Modal modal={modal} setModal={setModal} function={delPassageiros}/>
            <div className="w-100 d-flex justify-content-end">
            <Link to={'/'} className="d-flex Option justify-content-center align-items-center btn_p mt-4 mr-4 text_16">SAIR</Link>
            </div>
            <div className="title_div d-flex w-75 mt-4 aux_my60">
                <p className="text_32 text_grey">Passageiros</p>
            </div>
            <div className="d-flex aux_my32 w-100 btn_search justify-content-center align-items-center">
                <div className="d-flex align-items-center search_div">
                    <AiOutlineSearch className="icon_p my-3 icon_search"/>
                    <input type="search" className="search w-75"/>
                </div>
                <button className="btn_p btn_cell">CVG</button>
            </div> 
            {listPassa}
        </div>
    )
}

export default Passageiros