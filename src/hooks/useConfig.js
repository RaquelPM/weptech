import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { API_config } from '../consts'

const useConfig = ()=>{

    const location = useLocation();

    const [bairro] = useState(API_config[location.state])

   // function updateEmbarques(embarque, name, valor){
        //API[location.state].embarques[embarque].nome = name;
       // API[location.state].embarques[embarque].valor = valor;
   // }

    //function addEmbarque(embarque,name, valor){
        //API[location.state].embarques['embarque' + embarque] = {nome:name, valor:valor}
    //}

    //function delEmbarque(embarque){
       //delete API[location.state].embarques[embarque]
    //}

    return[bairro]
}

export default useConfig