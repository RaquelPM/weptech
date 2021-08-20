import { useState } from 'react'
import { API_config_rotas } from '../consts'

const useRota = ()=>{

    const [rotas] = useState(API_config_rotas);

    function updateRota(id, bairro1, bairro2, price, tempo){
        API_config_rotas[id].bairro1 = bairro1;
        API_config_rotas[id].bairro2 = bairro2;
        API_config_rotas[id].price = price;
        API_config_rotas[id].tempo = tempo;
        alert('Salvo!')
    }

    function delRota(id){
        API_config_rotas.map((rota)=>{
            if(rota.id === id){
                API_config_rotas.splice(API_config_rotas.indexOf(rota),1);
            }
            return localStorage.getItem('index')
        })
    }

    return[updateRota, delRota, rotas]
}

export default useRota