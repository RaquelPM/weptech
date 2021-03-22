import React, { useState } from 'react';
import { AiOutlineInfoCircle, AiOutlineClockCircle, AiOutlineTeam, AiOutlineUser, AiOutlineSetting, AiOutlineProfile, AiOutlineCheck, AiOutlineCloseCircle } from "react-icons/ai" 
import { Link } from 'react-router-dom'

function Option(props){

    const [mouse, setMouse] = useState(false);

    return(
        <Link to={props.rota} className="Option aux_my25" onMouseEnter={()=> setMouse(true)} onMouseLeave={()=> setMouse(false)}>
            <div className="d-flex w-100">
                { props.info && <AiOutlineInfoCircle className="icon_p"/>}
                { props.clock && <AiOutlineClockCircle className="icon_p"/>}
                { props.passageiros && <AiOutlineTeam className="icon_p"/> }
                { props.motorista && <AiOutlineUser className="icon_p"/> }
                { props.config && <AiOutlineSetting className="icon_p"/> }
                { props.relatorios && <AiOutlineProfile className="icon_p"/> }
                { props.fim && <AiOutlineCheck className="icon_p" /> }
                { props.cancel && <AiOutlineCloseCircle className="icon_p"/> }
                <p id="legenda"className="aux_mxl16 aux_mxr16 text_16" >{props.legenda}</p>
                { mouse && <p id="barra_l" >|</p>}
            </div>
        </Link>
    );
}

export default Option