import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div className="d-flex w-100 h-screen flex-column align-items-center justify-content-center bg_primary">
      <p className="mb-3 italic text-white text_40">Weptech</p>
      <div className="d-flex flex-column align-items-center bg-white w_login rounded_15">
        <p className="text_grey text_32 aux_myt45 aux_my60 ">Login</p>
        <form className="d-flex flex-column align-items-center aux_my60">
          <label className="text_16 text_grey line_0 mb-2 ml-3 w-100 text-left" >Email</label>
          <input type="text" className="input_dark px-4 w_input_login aux_my32" placeholder="Digite o seu email aqui."/>

          <label className="text_16 text_grey line_0 mb-2 ml-3 w-100 text-left" >Senha</label>
          <input type="text" className="input_dark px-4 w_input_login aux_my48" placeholder="Insira a senha da sua conta."/>

          <Link to={'/principal'} type="button" className="Option d-flex align-items-center justify-content-center finalizar btn_p">Entrar</Link>
        </form>
        <a href="/" className="aux_my45">SUPORTE WEPTECH</a>
      </div>
    </div>
  );
}

export default Login;
