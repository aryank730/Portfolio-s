import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import Routing from './Component/Utils/Routing'
import Navbar from './Component/Pages/Navbar'

function App() {
  return (
    <div className="max-w-screen bg-ink min-h-screen">
      <Navbar className="m-auto" />
      <div className="bg-ink">
        <Routing className="flex-1" />
      </div>
    </div>
  )
}

export default App