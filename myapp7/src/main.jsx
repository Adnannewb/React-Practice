import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ContactUs from './pages/ContactUs.jsx'
import NotFound from './pages/NotFound.jsx'
import Redirect from './pages/Redirect.jsx'



const myrouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<NotFound/>, 
  
  children:[{
    path: "/",
    element:<Home/>,         
  },
  {
    path: "/about",
    element: <About/>, 
  },
  {
    path: "/contact",
    element: <ContactUs/>, 
  },
  {
    path: "*",
    element: <NotFound/>, 
  },
  {
    path: "home",
    element: <Redirect/>, 
  },

]
}]);


createRoot(document.getElementById('root')).render(
  <RouterProvider router={myrouter}>

  </RouterProvider>
)
