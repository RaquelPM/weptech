import { useState } from 'react'
import { API_passageiros } from '../consts'

const usePassa = ()=>{

    const [passageiros] = useState(API_passageiros)

    function updatePassageiro(id, nome, telefone, status){
        API_passageiros[id].nome = nome;
        API_passageiros[id].telefone = telefone;
        API_passageiros[id].status = status;
        alert('Salvo!')
    }

    function delPassageiros(id){
        API_passageiros.map((passageiro)=>{
            if(passageiro.id === id){
                API_passageiros.splice(API_passageiros.indexOf(passageiro),1);
            }
            return localStorage.getItem('index')
        })
    }

    return[passageiros, updatePassageiro, delPassageiros]
}

export default usePassa