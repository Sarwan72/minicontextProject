import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/login'

import './App.css'
import Profile from './Components/Profile'

function App() {
  

  return (
    <UserContextProvider>
      <h1>kaise ho aap log</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App
