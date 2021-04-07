import React from 'react'

import '../style/App.css'
import '../style/Pages.css'

import Card from '../components/card_prin'

function Principal() {
  return (
    <div class="d-flex page w-100 flex-column align-items-center">
      <div className="w-100 d-flex justify-content-end">
        <button className="btn_p mt-4 mr-4 text_16">SAIR</button>
      </div>
      <div className="title_div d-flex w-75 mt-4 aux_my60">
        <p className="text_32 text_grey">Principal</p>
      </div>
      <Card title="Faturamento" valor="R$ 10,00"/>
      <Card title="Viagens Finalizadas" valor="1000"/>
      <Card title="Novos Motoristas" valor="10"/>
      <Card title="Novos passageiros" valor="100"/>
    </div>
  );
}

export default Principal;
