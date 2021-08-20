import  React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../style/App.css'
import '../style/Pages.css'

import { API_financeiro_pago } from '../consts'
import { API_financeiro_apagar } from '../consts'

import { FiArrowRightCircle } from 'react-icons/fi'

function Config(){

    const [pagos] = useState(API_financeiro_pago);
    const [apagar] = useState(API_financeiro_apagar);

    const [tabela, setTabela] = useState(false);

    const listPagos = pagos.map((pago)=>
        <div className="d-flex text_16 my-2">
            <p className="mr-1 w150px  text-center">{pago.período}</p>
            <p className="mr-1 w150px text-center">{pago.motorista}</p>
            <p className="mr-1 w150px text-center ">{pago.telefone}</p>
            <p className="mr-1 w150px text-center ">{pago.valor}</p>
            <p className="mr-1 w150px text-center ">{pago.desconto}</p>
            <p className="mr-1 w150px text-center ">{pago.total}</p>
            <div className=" mr-1 w150px ">
                <p className="line_0 ml-5">{pago.status}</p>
                <button className="btn_status ml-3 mb-3 d-flex align-items-center justify-content-center transform"><FiArrowRightCircle className="icon_fina"/></button>
            </div>
        </div>
    )

    const listApagar = apagar.map((divida)=>
        <div className="d-flex text_16 my-2">
            <p className="mr-1 ml-3 w150px  text-center">{divida.período}</p>
            <p className="mr-1 w150px text-center">{divida.motorista}</p>
            <p className="mr-1 w150px text-center ">{divida.telefone}</p>
            <p className="mr-1 w150px text-center ">{divida.valor}</p>
            <p className="mr-1 w150px text-center ">{divida.desconto}</p>
            <p className="mr-1 w150px text-center ">{divida.total}</p>
            <div className="mr-1 w20px ">
                <p className="mr-2 ml-3">{divida.status}</p>
                <button className="btn_status mb-3 d-flex align-items-center justify-content-center"><FiArrowRightCircle className="icon_fina"/></button>
            </div>
        </div>
    )

    return(
        <div className="w-100 d-flex flex-column align-items-center page">     
            <div className="w-100 d-flex justify-content-end">
            <Link to={'/'} className="d-flex Option justify-content-center align-items-center btn_p mt-4 mr-1 text_16">SAIR</Link>
            </div>
            <div className="title_div d-flex w-75 mt-3 aux_my45">
                <p className="text_32 text_grey aux_mxr20">Financeiro</p>
            </div>

            <div className="w90 d-flex flex-column relative">
                <div className="d-flex text_20 text_gray">
                    <button className={`px-5 py-3 border_t_10 outline_none border_0 ${!tabela && 'bg-white'} ${tabela && 'bg_gray'}`} onClick={()=>setTabela(false)}>A pagar</button>
                    <button className={`px-5 py-3 border_t_10 outline_none border_0 ${tabela && 'bg-white'} ${!tabela && 'bg_gray'}`}  onClick={()=>setTabela(true)}>Pago</button>
                </div>
                <div className="w-100 h500px bg-white border_b_tr_10 d-flex flex-column align-items-center pt-5 pb-3  overflow-auto scrol">
                    <div className="d-flex text_20 text_gray">
                        <p className="mr-1 w150px text-center">Períodos</p>
                        <p className="mr-1 w150px text-center">Motoristas</p>
                        <p className="mr-1 w150px text-center">Telefones</p>
                        <p className="mr-1 w150px text-center">Valores</p>
                        <p className="mr-1 w150px text-center">Descontos</p>
                        <p className="mr-1 w150px text-center">Total</p>
                        <p className="mr-1 w150px text-center">Status</p>
                    </div>

                    {tabela && listPagos}
                    {!tabela && listApagar}
                </div>
            </div>
        </div>
    )
}

export default Config