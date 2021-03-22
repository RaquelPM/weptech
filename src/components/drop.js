import React, { useState } from 'react'

import { AiOutlineCar, AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai"

function Drop(props){
    const [drop, setDrope] = useState(false)

    return(
        <div onClick={()=>setDrope(!drop)} className={`w-100 d-flex flex-column ${drop && 'Drop_down'} ${!drop && 'Drop_up'}`}>
            <div className="d-flex aux_my25">
                <AiOutlineCar className={`icon_p ${drop && 'apagado'}`}/>
                <p id="legenda" class={`aux_mxl16 clicavel ${drop && 'apagado'}`} >{props.legenda}</p>
                { !drop && <AiOutlineCaretDown id="setinha" className={`mt-1 ml-2 clicavel ${drop && 'apagado'}`} /> }
                { drop && <AiOutlineCaretUp id="setinha" className={`mt-1 ml-2 clicavel ${drop && 'apagado'}`}/>  }
            </div>
            <div className="d-flex flex-column">
                {props.top}
                {props.center}
                {props.bottom}
            </div>
        </div>
    )
}

export default Drop