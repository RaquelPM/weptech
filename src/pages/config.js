import  React, { useEffect } from 'react'

import '../style/App.css'
import '../style/Pages.css'

import { FiArrowRightCircle } from 'react-icons/fi'

import useConfig from '../hooks/useConfig'

function Config(){

    const [bairro] = useConfig();

    useEffect(() => {
        console.log(bairro)
      });
    
    return(
        <div class="w-100 d-flex flex-column align-items-center">
            <div className="w-100 d-flex justify-content-end">
                <button className="btn_p mt-4 mr-5 text_16">SAIR</button>
            </div>
            <div className="title_div d-flex w-75 mt-4 aux_my60 align-items-center">
                <p className="text_32 text_grey aux_mxr20">Configurações</p>
                <FiArrowRightCircle className="icon_title mb-3 aux_mxr20"/>
                <p className="text_32 text_grey">{bairro.nome}</p>
            </div>
            <div className="d-flex aux_my32 w-75 justify-content-center">
                <button className="bg-white mr-4 editar  w-25">Voltar</button>
                <button className="adicionar text-white w-25">Salvar</button>
            </div>
        </div>
    )
}

export default Config