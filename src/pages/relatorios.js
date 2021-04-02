import  React from 'react'

import '../style/App.css'
import '../style/Pages.css'

import Card from '../components/card_dados'
import { API_relatorios } from '../consts'

import { AiOutlineSearch } from 'react-icons/ai'

function Relatorios(){
    const listCards = API_relatorios.map((relatorio)=>
        <Card 
            relatorio 
            nome={relatorio.motorista}
            viagens={relatorio.viagens}
            valor={relatorio.valor}
            receber={relatorio.receber} 
        />
    )
    return(
        <div class="w-100 d-flex flex-column align-items-center">
            <div className="w-100 d-flex justify-content-end">
                <button className="btn_p mt-4 mr-5 text_16">SAIR</button>
            </div>
            <div className="title_div d-flex w-75 mt-4 aux_my60">
                <p className="text_32 text_grey">Relatórios</p>
            </div>
            <div className="d-flex aux_my32 w-100 justify-content-center">
                <div className="d-flex align-items-center w-50 search_div aux_mxr16">
                    <AiOutlineSearch className="icon_p my-3 mx-5"/>
                    <input type="search" className="search w-75 mr-4"/>
                </div>
                <button className="btn_p my-1">PDF</button>
            </div> 
            {listCards}
        </div>
    )
}

export default Relatorios