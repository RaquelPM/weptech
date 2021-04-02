import { useState } from 'react'
import { API_motoristas } from '../consts'

const useMoto = ()=>{

    const [motoristas] = useState(API_motoristas)

    function updateMotoristas(id, name, telefone){
        API_motoristas[id].nome = name;
        API_motoristas[id].telefone = telefone;
    }

    return[motoristas,updateMotoristas]
}

export default useMoto