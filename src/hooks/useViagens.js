import { useState } from 'react'
import { API_viagens } from '../consts'

const useViagens = ()=>{

    const [viagens] = useState(API_viagens)

    function updateMotorista(id, motorista){
        API_viagens[id].motorista = motorista;
        alert('Salvo!')
    }

    function delORfimViagem(id){
        API_viagens.splice(id,1);
    }

    return[viagens,updateMotorista, delORfimViagem]
}

export default useViagens