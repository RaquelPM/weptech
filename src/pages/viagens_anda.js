import  React, { useState } from 'react'

import '../style/App.css'
import '../style/Pages.css'

import Card from '../components/card_viagens'

import Modal from '../components/modal'

import useViagens from '../hooks/useViagens'

function Viagens(){

    const [modal, setModal] = useState(false);
    
    const [viagens, updateMotorista, delORfimViagem] = useViagens();

    const listCards = viagens.map((viagem)=>
        <Card
            id={viagem.id}
            key={viagem.id}
            local={viagem.embarque}
            desembarque={viagem.desembarque}
            motorista={viagem.motorista}
            pontos={viagem.pontos}
            setModal={setModal}
            updateMotorista={updateMotorista}
        />
    )

    return(
        <div class="w-100 d-flex flex-column align-items-center page">
            <Modal modal={modal} setModal={setModal} function={delORfimViagem} viagens/>
            <div className="w-100 d-flex justify-content-end">
                <button className="btn_p mt-4 mr-4 text_16">SAIR</button>
            </div>
            <div className="title_div d-flex w-75 mt-4 aux_my60 line_35_cell">
                <p className="text_32 text_grey">Viagens em andamento</p>
            </div>
            {listCards}
        </div>
    )
}

export default Viagens