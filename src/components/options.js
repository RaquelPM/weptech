import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function Option(props){

    const [mouse, setMouse] = useState(false);

    return(
        <Link to={props.rota} onClick={props.sidebar} className="Option aux_my25" onMouseEnter={()=> setMouse(true)} onMouseLeave={()=> setMouse(false)}>
            <div className="d-flex w-100">
                { props.icon }
                <p id="legenda"className="aux_mxl16 aux_mxr16 text_16" >{props.legenda}</p>
                { mouse && <p id="barra_l" >|</p>}
            </div>
        </Link>
    );
}

export default Option