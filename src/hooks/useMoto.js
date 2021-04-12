import { useState } from 'react'
import { API_motoristas } from '../consts'

const useMoto = ()=>{

    const [motoristas] = useState(API_motoristas)

    function updateMotoristas(id, name, telefone){
        API_motoristas[id].nome = name;
        API_motoristas[id].telefone = telefone;
        alert('Salvo!')
    }

    function delMotoristas(id){
        API_motoristas.splice(id, 1);
    }

    return[motoristas,updateMotoristas, delMotoristas]
}

export default useMoto