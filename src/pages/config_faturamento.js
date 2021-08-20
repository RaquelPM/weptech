import  React, { useState } from 'react'

import '../style/App.css'
import '../style/Pages.css'
import '../style/Components.css'

import { FiArrowRightCircle } from 'react-icons/fi'

import { Link } from 'react-router-dom'

function Config_faturamento(){

    const [modo, setModo] = useState('semanal')

    return(
        <div className="w-100 d-flex flex-column align-items-center page">
            
            <div className="w-100 d-flex justify-content-end">
                <Link to={'/'} className="d-flex Option justify-content-center align-items-center btn_p mt-4 mr-4 text_16">SAIR</Link>
            </div>
            <div className="title_div d-flex w-75 mt-4 aux_my60 title_div_config">
                <p className="text_32 text_grey aux_mxr20">Configurações</p>
                <div className="d-flex align-content-center mt-1">
                    <FiArrowRightCircle className="icon_title aux_mxr20 mb-3"/>
                    <p className="text_32 text_grey line_30_to_18 mt-1">Faturamento</p>
                </div>
            </div>

            <div className="d-flex aux_my32 align-items-center justify-content-center w-100 flex_temp">
                <div className="d-flex ml-5 w100_to_15 border-right border-secondary">
                    <p className="text_16 text_gray my-4">Frequência:</p>
                </div>
                <div class="d-flex  justify-content-center w-75">
                    <div className="d-flex flex_temp align-items-center">
                        <button onClick={()=>setModo('semanal')} className={`d-flex align-items-center justify-content-center btn_p ${modo === 'semanal' && 'text-dark editar'}  ${modo !== 'semanal' && 'finalizar'}` }>
                            <p class="mt-3 mr-2">Semanal</p>
                        </button>
                        <button onClick={()=>setModo('quinzenal')}  className={`d-flex align-items-center justify-content-center btn_p ${modo === 'quinzenal' && 'text-dark editar'}  ${modo !== 'quinzenal' && 'finalizar'}` }>
                            <p class="mt-3 mr-2">Quinzenal</p>
                        </button>

                        <button onClick={()=>setModo('mensal')}  className={`d-flex align-items-center justify-content-center btn_p ${modo === 'mensal' && 'text-dark editar'}  ${modo !== 'mensal' && 'finalizar'}` }>
                            <p className="mt-3 mr-2">Mensal</p>
                        </button>
                    </div>
                </div>
            </div>

            <div className="d-flex flex_temp justify-content-center align-items-center bg-white w90 text_gray text_20 border_20 h90_to_50 aux_my60">
                <div className="d-flex w50_to_100 h-50 justify-content-center align-items-center border_config_fat border-secondary">
                    <p className="pb-4 pt-5">Taxa Weptech 5%</p>
                </div>

                <div className="d-flex w50_to_100  h-50 justify-content-center align-items-center border_config_fat border-secondary">
                    <p className="pb-4 pt-5">Sua taxa 10%</p>
                </div>

                <div class="d-flex w50_to_100  h-50 justify-content-center align-items-center">
                    <p className="pb-4 pt-5">Taxa total 15%</p>
                </div>
            </div>
        </div>
    )
}

export default Config_faturamento