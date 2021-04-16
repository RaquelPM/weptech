import { useState } from 'react'
import { API_motoristas } from '../consts'

const useMoto = ()=>{

    const [motoristas] = useState(API_motoristas)

    function updateMotoristas(id, name, telefone, status){
        API_motoristas[id].nome = name;
        API_motoristas[id].telefone = telefone;
        API_motoristas[id].status =  status
        alert('Salvo!')
    }

    function delMotoristas(id){
        API_motoristas.map((motorista)=>{
            if(motorista.id === id){
                API_motoristas.splice(API_motoristas.indexOf(motorista),1);
            }
            return localStorage.getItem('index')
        })
    }

    return[motoristas,updateMotoristas, delMotoristas]
}

export default useMoto