import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Contacts from "../Pages/Contatos/Contacts";
import Projects from "../Pages/Projetos/Projects";
import About from "../Pages/Sobre/About";
import Principal from "../components/Principal/Principal";

export default function applicationRoutes(){
    return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Principal />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    </BrowserRouter>
    )
}
