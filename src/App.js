import { BrowserRouter, Routes , Route,  } from "react-router-dom"
import './App.css'


import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Popular from "./pages/Popular"
import Weekly from "./pages/Weekly"
import Header from "./Components/Header"
import "../src/App.css"

 
const App = () => {
  return (
      
    <BrowserRouter>
     <Header />
     
   
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path ='/favorites' element={<Favorites/>} />
          <Route path='/popular' element={<Popular/>} />
          <Route path='/weekly' element={<Weekly/>} />
          <Route path='/*' element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App