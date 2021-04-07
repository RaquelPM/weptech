import React, { useState } from 'react'

import '../style/App.css'
import '../style/Sidebar.css';

import Option from "./options"
import Drop from  "./drop"

import { AiOutlineInfoCircle, AiOutlineClockCircle, AiOutlineTeam, AiOutlineUser, AiOutlineSetting, AiOutlineProfile, AiOutlineCheck, AiOutlineCloseCircle } from "react-icons/ai" 

import { FiMenu } from 'react-icons/fi'

function Sidebar() {

  const [sidebar, setSidebar] = useState(false);

  function closeSidebar(){
    setSidebar(!sidebar)
  }

  return (
    <div>
      <div className="d-flex fixed-top Sidetop w-100 justify-content-center align-items-center">
        <div className="w-25 d-flex align-items-start">
          <FiMenu onClick={()=>setSidebar(!sidebar)} className="icon_sidetop ml-3"/>
        </div>
        <div className="w-75 d-flex align-items-start">
          <p id="title_top" className="mt-2 ml-5">Weptech</p>
        </div>
      </div>
      { sidebar && <div onClick={()=>setSidebar(!sidebar)} className="sombra"/>}
      <div className={`Sidebar ${sidebar && 'Sidebar_show'} ${!sidebar && 'Sidebar_shadow'} h-100 d-flex align-items-center flex-column`}>
        <p id="title_side" className="aux_my80 mt-3 mr-1" >Weptech</p>
        <div className="d-flex w-100 align-items-start ml-5 flex-column">
          <Option rota="/" icon={<AiOutlineInfoCircle className="icon_p"/>} legenda="Principal" sidebar={closeSidebar}/>
          <div id="linha" className="aux_my40" />
          <Drop 
            top={<Option rota="/viagens/andamento" icon={<AiOutlineClockCircle className="icon_p"/>} legenda="Em andamento"/>} 
            center={<Option rota="/teste" icon={<AiOutlineCheck className="icon_p"/>}legenda="Finalizados"/>}
            bottom={<Option rota="/teste" icon={<AiOutlineCloseCircle className="icon_p"/>} legenda="Cancelados"/>}
            legenda="Viagens"
            sidebar={closeSidebar}
          />
          <div id="linha" className="aux_my40" />
          <Option rota="/passageiros" icon={<AiOutlineTeam className="icon_p"/>} legenda="Passageiros" sidebar={closeSidebar}/>
          <Option rota="/motoristas" icon={<AiOutlineUser className="icon_p"/>} legenda="Motoristas" sidebar={closeSidebar}/>
          <Option rota="/configurações" icon={<AiOutlineSetting className="icon_p"/>} legenda="Configurações" sidebar={closeSidebar}/>
          <Option rota="/relatorios" icon={<AiOutlineProfile className="icon_p"/>} legenda="Relatórios" sidebar={closeSidebar}/>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
