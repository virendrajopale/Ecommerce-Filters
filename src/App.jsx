import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './Components/app-layout'
import Home from './Pages/Home'
import { Context } from './Context/Context'
import Cart from './Pages/Cart'
import Loader from './Components/Loader'

function App() {
  const [count, setCount] = useState(0)
const router=createBrowserRouter([
  {
  element:<AppLayout/>,
  children:[{
    element:<Home/>,
    path:''
  },
  {
    element:<Cart/>,
    path:'/cart'

  },
  {
    element:<Loader/>,
    path:'/loader'

  }
]  
}
])
  return (
    <Context>

   <RouterProvider router={router}/>
    </Context>
  )
}

export default App
