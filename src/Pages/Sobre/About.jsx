import React from "react";
import Header from "../../components/Header/Header";
import * as J from './styles'

const About = ()=>{
    return(
        <>
        <Header />
        <J.Container>
            <J.AboutContainer>
            <J.Text>Olá, sou um apaixonado por tecnologia, formado em Técnico em Informática pelo Centro Universitário UNA desde novembro de 2015 e atualmente estudando programação.</J.Text>
            <J.Text>Estou aqui mostrando meus projetos e evolução em desenvolvimento web/softwares, sempre buscando mais conhecimento, desenvolver e adquirir habilidades.</J.Text>
            </J.AboutContainer>
        </J.Container>
        </>
    )
}
export default About;