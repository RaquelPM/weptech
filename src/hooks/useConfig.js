import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { API_config } from '../consts'

const useConfig = () =>{

    const location = useLocation();
    const [bairro] = useState(API_config[location.state])

    function attPonto(id_ponto, tipo, nome, valor, horarios){
        bairro.pontos[id_ponto].nome=  nome;
        bairro.pontos[id_ponto].tipo= tipo;
        bairro.pontos[id_ponto].valor= valor;
        bairro.pontos[id_ponto].horarios= horarios;
    }

    return[bairro, attPonto]
}

export default useConfig