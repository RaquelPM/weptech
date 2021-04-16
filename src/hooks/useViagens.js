import { useState } from 'react'
import { API_viagens } from '../consts'

const useViagens = ()=>{

    const [viagens] = useState(API_viagens)

    function updateMotorista(id, motorista){
        API_viagens[id].motorista = motorista;
        alert('Salvo!')
    }

    function delORfimViagem(id){
        API_viagens.map((viagem)=>{
            if(viagem.id === id){
                API_viagens.splice(API_viagens.indexOf(viagem),1);
            }
            return localStorage.getItem('index')
        })
    }

    return[viagens,updateMotorista, delORfimViagem]
}

export default useViagens