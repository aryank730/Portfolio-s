import { NavLink, Outlet } from 'react-router-dom'
import './App.css'
import Routing from './Component/Utils/Routing'
import Navbar from './Component/Pages/Navbar'

function App() {


  return (
    <>
      <div className="max-w-screen ">
        {/* SideBar */}
       <Navbar className="m-auto"  />
        {/* View Content */}
        <div className=" bg-white " >
        <Routing className="flex-1"/>

      </div>
      </div>

    </>
  )
}

export default App
