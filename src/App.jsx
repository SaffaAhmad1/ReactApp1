import './App.css'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Notfound from './components/Notfound/Notfound';


let x = createBrowserRouter([
  {path:"" , element: <Layout/>, children:[
    {index:true, element:<Home/>},
    {path:"about" , element:<About/>},
    {path:"portfolio", element:<Portfolio/>},
    {path:"contact" , element:<Contact/>},
    {path:"*" , element:<Notfound/>}
  ]}
])

function App() {

  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  )
}

export default App
