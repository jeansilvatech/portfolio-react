import React from "react";
import * as J from './styles'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub, faInstagram, faDiscord, faFacebook, faTwitterSquare, faTwitch} from '@fortawesome/free-brands-svg-icons'
export const Form = ()=>{
    return(
        <J.Container>
        <J.Forms>
            <J.Fields>
                <label htmlFor="name">Nome</label>
                <J.Input type="text" id="name" />
            </J.Fields>
            <J.Fields>
                <label htmlFor="email">E-mail</label>
                <J.Input type="text" name="email" id="email" />
            </J.Fields>
           <J.Fields>
                <label htmlFor="message">Mensagem</label>
                <J.TextArea type="textArea" id="message"/>
           </J.Fields>
            <J.Button>Enviar</J.Button>
        </J.Forms>
        <J.Line></J.Line>
        <J.H2>Redes Sociais</J.H2>
        <J.ContainerSocial>
            <J.Social href=""><FontAwesomeIcon icon={faLinkedin} /></J.Social>
            <J.Social href=""><FontAwesomeIcon icon={faGithub} /></J.Social>
            <J.Social href=""><FontAwesomeIcon icon={faInstagram} /></J.Social>
            <J.Social href=""><FontAwesomeIcon icon={faFacebook} /></J.Social>
            <J.Social href=""><FontAwesomeIcon icon={faTwitterSquare} /></J.Social>
            <J.Social href=""><FontAwesomeIcon icon={faTwitch} /></J.Social>
            <J.Social href=""><FontAwesomeIcon icon={faDiscord} /></J.Social>
        </J.ContainerSocial>
        </J.Container>
    )
}