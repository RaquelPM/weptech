import  React from 'react'

import '../style/App.css'
import '../style/Pages.css'

import Card from '../components/card_viagens'

import { API_viagens } from '../consts'

function Viagens(){

    const listCards = API_viagens.map((viagem)=>
        <Card
            local={viagem.embarque}
            desembarque={viagem.desembarque}
            motorista={viagem.motorista}
            pontos={viagem.pontos}
        />
    )

    return(
        <div class="w-100 d-flex flex-column align-items-center">
            <div className="w-100 d-flex justify-content-end">
                <button className="btn_p mt-4 mr-5 text_16">SAIR</button>
            </div>
            <div className="title_div d-flex w-75 mt-4 aux_my60">
                <p className="text_32 text_grey">Viagens em andamento</p>
            </div>
            {listCards}
        </div>
    )
}

export default Viagens