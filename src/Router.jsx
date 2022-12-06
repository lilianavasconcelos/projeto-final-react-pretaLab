import {BrowserRouter, Routes, Route} from 'react-router-dom'

import {Menu} from './components/Menu'
import {Footer}from './components/Footer'


import {Inicio} from './pages/Inicio'
import{Contato} from './pages/Contato'

import{Sobre} from './pages/Sobre'

export function Router(){
    return(
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="/" element ={<Inicio />} />
                <Route path="/sobre" element ={<Sobre />}/>
                <Route path="/portifolio" element ={<h1>portifolio</h1>}/>
                <Route path="/contato" element ={<Contato/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
        
    )
}
