import  React, { useState } from 'react'

import '../style/App.css'
import '../style/Pages.css'

import Card from '../components/card_dados'
import useMoto from '../hooks/useMoto'
import Modal from '../components/modal'

import { AiOutlineSearch } from 'react-icons/ai'

function Motoristas(){
    const [motoristas, updateMotoristas, delMotoristas] = useMoto();
    const [modal, setModal] = useState(false);

    const listMoto = motoristas.map((motorista)=>   
        <Card 
            key={motorista.id}
            id={motorista.id}
            nome={motorista.nome} 
            telefone={motorista.telefone} 
            status={motorista.status}
            update={updateMotoristas}
            setModal={setModal}
        />
    )

    return(
        <div class="w-100 d-flex flex-column align-items-center page">
            <Modal modal={modal} setModal={setModal} function={delMotoristas}/>
            <div className="w-100 d-flex justify-content-end">
                <button className="btn_p mt-4 mr-4 text_16">SAIR</button>
            </div>
            <div className="title_div d-flex w-75 mt-4 aux_my60">
                <p className="text_32 text_grey">Motoristas</p>
            </div>
            <div className="d-flex aux_my32 w-100 btn_search justify-content-center align-items-center">
                <div className="d-flex align-items-center search_div">
                    <AiOutlineSearch className="icon_p my-3 icon_search"/>
                    <input type="search" className="search w-75 icon_search"/>
                </div>
                <button className="btn_p btn_cell">CVG</button>
            </div> 
            {listMoto}
        </div>
    )
}

export default Motoristas