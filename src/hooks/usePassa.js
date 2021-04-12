import { useState } from 'react'
import { API_passageiros } from '../consts'

const usePassa = ()=>{

    const [passageiros] = useState(API_passageiros)

    function updatePassageiro(id, nome, telefone){
        API_passageiros[id].nome = nome;
        API_passageiros[id].telefone = telefone;
        alert('Salvo!')
    }

    function delPassageiros(id){
        API_passageiros.splice(id, 1);
    }

    return[passageiros, updatePassageiro, delPassageiros]
}

export default usePassa