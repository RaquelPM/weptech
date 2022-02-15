import Sidebar from './components/Sidebar'
import Principal from './pages/principal'
import Motoristas from './pages/motoristas'
import Passageiros from './pages/passageiros'
import Relatórios from './pages/relatorios'
import Config from './pages/config'
import Config_bairro from './pages/config_bairro'
import Config_pontos from './pages/config_pontos'
import Viagens_andamento from './pages/viagens_anda'
import Login from './pages/login'
import Config_rotas from './pages/config_rotas'
import Config_faturamento from './pages/config_faturamento'
import Financeiro from './pages/financeiro'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="w-100 h-100 d-flex">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route>
            <Sidebar />
            <Route path="/principal" exact component={Principal} />
            <Route path="/motoristas" exact component={Motoristas} />
            <Route path="/passageiros" exact component={Passageiros} />
            <Route path="/relatorios" exact component={Relatórios} />
            <Route
              path="/viagens/andamento"
              exact
              component={Viagens_andamento}
            />
            <Route path="/configurações" exact component={Config} />
            <Route
              path="/configurações/bairro"
              exact
              component={Config_bairro}
            />
            <Route path="/configurações/rotas" exact component={Config_rotas} />
            <Route
              path="/configurações/bairro/pontos"
              exact
              component={Config_pontos}
            />
            <Route
              path="/configurações/faturamento"
              exact
              component={Config_faturamento}
            />
            <Route path="/financeiro" exact component={Financeiro} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
