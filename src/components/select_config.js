import React, { useState } from 'react'

import '../style/Components.css'
import '../style/App.css'

import {AiOutlineDown} from 'react-icons/ai'

import { API_config } from '../consts'

function SelectConfig(props){

    const [select, setSelect] = useState(false);
    const [bairros] = useState(API_config);
    const [bairro, setBairro] = useState(props.bairro)

    const listBairros = bairros.map((bairro)=>
        <div key={bairro.id}  onClick={()=>{setBairro(bairro.nome);props.setBairro(bairro.nome); setSelect(false)}} className="p-3 shadow-sm border_10 mx-1 mt-3 clicavel">
            <p>{bairro.nome}</p>
        </div>
    )
    
    return(
        <div className={`d-flex flex-column select_config scrol ${select && 'select_config_open'} ${!select && 'select_config_close'}` }>
            <div className="d-flex">
                <div className="d-flex align-items-center px-3 select_button w-100"><p className="mt-3">{bairro}</p></div>
                <div onClick={()=>setSelect(!select)} className="d-flex select_button justify-content-end align-items-center shadow-lg px-4 border_20">
                    <AiOutlineDown className={`icon_p ${select && 'transform'}`}/>
                </div>
            </div>

            <div className="d-flex flex-column overflow-auto">
                {listBairros}
            </div>
        </div>

    )            
}

export default SelectConfig