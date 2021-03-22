
import Sidebar from './components/Sidebar'
import  Principal from './pages/principal'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="w-100 h-100 d-flex">
        <BrowserRouter>
            <Sidebar />
            <Switch>
                <Route path="/" exact={true} component={Principal}/>
                <Route path="/teste" exact={true} component={Sidebar}/>
            </Switch>
        </BrowserRouter>
    </div>
  );
}
export default App;
