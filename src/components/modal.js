import React from 'react'

function Modal(props){

    return(
        <div>
                <div id="modal_div" className={`fixed-top d-flex justify-content-center align-items-center ${props.modal && 'fade_show'} ${!props.modal && 'fade_cover'}`}>
                    <div id="modal_sombra" onClick={()=>props.setModal(false)} className="w-100 h-100"/>
                    <div id="modal" className="d-flex position-absolute justify-content-center align-items-center flex-column text_32 w-75 line_30 ">
                            { props.viagens && <p className="w-75 text-center aux_my60 aux_myt60">Você tem certeza?</p>}
                            { !props.viagens && <p className="w-75 text-center aux_my60 aux_myt60">Você tem certeza que deseja excluir?</p>}
                            <div className="d-flex div_btns aux_my32">
                                <button  onClick={()=>{props.function(localStorage.getItem('index'));props.setModal(false)}} className="editar text_16">Sim</button>
                                <button  onClick={()=> props.setModal(false)} className="desativar text_16 text-white">Não</button>
                            </div>
                        </div>
                </div>
        </div>
    )
}

export default Modal