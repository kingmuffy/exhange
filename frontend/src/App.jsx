import Loader from './Loader'
import { Outlet } from 'react-router-dom'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'

function App() {
  return (
    <div>
      <h1 className="text-white">Hello World</h1>

      <div class="container mx-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default App
