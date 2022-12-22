import React from 'react';
import { Link } from 'react-router-dom';
import * as J from './styles';
import imgLogo from '../../assets/img/logo.png'

const Header=()=>{
    return(
        <J.Header>
            
            <J.Logo>
            <Link to="/"><J.Image src={imgLogo} alt="" /></Link>
            </J.Logo>
            <J.Buttons>
            <Link to="/about"><J.Button>Sobre</J.Button></Link>
            <Link to="/projects"><J.Button>Projetos</J.Button></Link>
            <Link to="/contacts"><J.Button>Contatos</J.Button></Link>
            </J.Buttons>
        </J.Header> 
    )
}
export default Header;