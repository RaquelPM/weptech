import React from 'react'

import '../style/App.css'
import '../style/Sidebar.css';

import Option from "./options"
import Drop from  "./drop"

function Sidebar() {
  return (
    <div className="Sidebar d-flex align-items-center flex-column">
      <p id="title_side" className="aux_my80 mt-3 mr-1" >Weptech</p>
      <div className="d-flex w-100 align-items-start ml-5 flex-column">
        <Option rota="/" info legenda="Principal"/>
        <div id="linha" className="aux_my40" />
        <Drop 
        top={<Option rota="/teste" clock legenda="Em andamento"/>} 
        center={<Option rota="/teste" fim legenda="Finalizados"/>}
        bottom={<Option rota="/teste" cancel legenda="Cancelados"/>}
        legenda="Viagens"
        />
        <div id="linha" className="aux_my40" />
        <Option rota="/teste" passageiros legenda="Passageiros"/>
        <Option rota="/teste" motorista legenda="Motoristas"/>
        <Option rota="/teste" config legenda="Configurações"/>
        <Option rota="/teste" relatorios legenda="Relatórios"/>
      </div>
    </div>
  );
}

export default Sidebar;
