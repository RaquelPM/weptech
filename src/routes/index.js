import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import Loading from './loading'

function Routes() {
  const [loading, setLoading] = useState(false)

  const Route = App

  return (
    <div className="w-100 h-100 d-flex">
      <BrowserRouter>
        {loading ? <Loading setLoading={setLoading} /> : <Route />}
      </BrowserRouter>
    </div>
  )
}

export default Routes
