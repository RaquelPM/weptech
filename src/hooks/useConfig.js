import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { API_config } from '../consts'

const useConfig = () =>{

    const location = useLocation();
    const [bairro] = useState(API_config[location.state])

    function attPonto(id_ponto, tipo, nome, referencia, horarios){
        if(horarios.length === 0) alert('É necessário se ter algum horário')
        else{
            bairro.pontos[id_ponto].nome=  nome;
            bairro.pontos[id_ponto].tipo= tipo;
            bairro.pontos[id_ponto].referencia= referencia;
            bairro.pontos[id_ponto].horarios= horarios;
            alert('Salvo!')
        }
    }

    function delPonto(id){
        bairro.pontos.map((ponto)=>{
            if(ponto.id === id){
                bairro.pontos.splice(bairro.pontos.indexOf(ponto),1);
            }
            return localStorage.getItem('index')
        })
    }

    return[bairro, attPonto, delPonto]
}

export default useConfig