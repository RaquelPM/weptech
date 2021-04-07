
import Sidebar from './components/Sidebar'
import  Principal from './pages/principal'
import Motoristas from './pages/motoristas'
import Passageiros from './pages/passageiros'
import Relatórios from './pages/relatorios'
import Config_prin from './pages/config_prin'
import Config from './pages/config'
import Viagens_andamento from './pages/viagens_anda'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="w-100 h-100 d-flex">
        <BrowserRouter>
            <Sidebar />
            <Switch>
                <Route path="/" exact={true} component={Principal}/>
                <Route path="/motoristas" exact={true} component={Motoristas}/>
                <Route path="/passageiros" exact={true} component={Passageiros}/>
                <Route path="/relatorios" exact={true} component={Relatórios}/>
                <Route path="/viagens/andamento" exact={true} component={Viagens_andamento}/>
                <Route path="/configurações" exact={true} component={Config_prin}/>
                <Route path="/configurações/bairro" exact={true} component={Config}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;
