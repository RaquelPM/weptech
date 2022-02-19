import { Switch, Route } from 'react-router-dom'
import Login from '../pages/login'

function Auth() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
    </Switch>
  )
}

export default Auth
