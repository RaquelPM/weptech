import React, { useState } from 'react'

import { AiOutlineCar, AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai"

function Drop(props){
    const [drop, setDrope] = useState(false)

    return(
        <div onClick={()=>setDrope(!drop)} className={`w-100 d-flex flex-column ${drop && 'Drop_down'} ${!drop && 'Drop_up'}`}>
            <div className="d-flex aux_my25 clicavel">
                <AiOutlineCar className={`icon_p ${drop && 'apagado'}`}/>
                <p id="legenda" className={`aux_mxl16 ${drop && 'apagado'}`} >{props.legenda}</p>
                { !drop && <AiOutlineCaretDown id="setinha" className={`mt-1 ml-2 ${drop && 'apagado'}`} /> }
                { drop && <AiOutlineCaretUp id="setinha" className={`mt-1 ml-2 ${drop && 'apagado'}`}/>  }
            </div>
            <div className="d-flex flex-column" onClick={props.sidebar}>
                {props.top}
                {props.center}
                {props.bottom}
            </div>
        </div>
    )
}

export default Drop