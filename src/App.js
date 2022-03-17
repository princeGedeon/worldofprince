import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Page404 from './pages/Page404'
export default function App() {
    //Navigation systeme
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Page404/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
