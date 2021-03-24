import React from 'react'

import '../style/App.css'
import '../style/Sidebar.css';

import Option from "./options"
import Drop from  "./drop"

import { AiOutlineInfoCircle, AiOutlineClockCircle, AiOutlineTeam, AiOutlineUser, AiOutlineSetting, AiOutlineProfile, AiOutlineCheck, AiOutlineCloseCircle } from "react-icons/ai" 

function Sidebar() {
  return (
    <div className="Sidebar d-flex align-items-center flex-column">
      <p id="title_side" className="aux_my80 mt-3 mr-1" >Weptech</p>
      <div className="d-flex w-100 align-items-start ml-5 flex-column">
        <Option rota="/" icon={<AiOutlineInfoCircle className="icon_p"/>} legenda="Principal"/>
        <div id="linha" className="aux_my40" />
        <Drop 
          top={<Option rota="/teste" icon={<AiOutlineClockCircle className="icon_p"/>} legenda="Em andamento"/>} 
          center={<Option rota="/teste" icon={<AiOutlineCheck className="icon_p"/>}legenda="Finalizados"/>}
          bottom={<Option rota="/teste" icon={<AiOutlineCloseCircle className="icon_p"/>} legenda="Cancelados"/>}
          legenda="Viagens"
        />
        <div id="linha" className="aux_my40" />
        <Option rota="/passageiros" icon={<AiOutlineTeam className="icon_p"/>} legenda="Passageiros"/>
        <Option rota="/motoristas" icon={<AiOutlineUser className="icon_p"/>} legenda="Motoristas"/>
        <Option rota="/teste" icon={<AiOutlineSetting className="icon_p"/>} legenda="Configurações"/>
        <Option rota="/relatorios" icon={<AiOutlineProfile className="icon_p"/>} legenda="Relatórios"/>
      </div>
    </div>
  );
}

export default Sidebar;
