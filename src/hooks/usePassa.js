import { useState } from 'react'
import { API_passageiros } from '../consts'

const usePassa = ()=>{

    const [passageiros] = useState(API_passageiros)

    function updatePassageiro(id, nome, telefone){
        API_passageiros[id].nome = nome;
        API_passageiros[id].telefone = telefone;
    }

    return[passageiros, updatePassageiro]
}

export default usePassa