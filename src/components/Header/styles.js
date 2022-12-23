import styled from "styled-components";


export const Header = styled.div`
    font-family: 'Josefin Sans', sans-serif;
    width: 100vw;
    height: 100px;
    background-color: rgba(0,0,0,0.5);
    display: flex;
    justify-content:space-between;
    align-items: center;
    color: white;
    transition:500ms;
    &:hover{
        background-color: rgba(0,0,0,0.7);
        transition:500ms;
    }
    @media (max-width:480px) {
        flex-direction: column;
        height: 150px;
    }
   
`
export const Logo = styled.div `
    padding: 10px;
    @media (max-width:480px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`
export const Buttons = styled.div `
    padding: 10px;
    @media (max-width:480px) {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0,0,0,0.3);
        padding:0px;
    }
`
export const Image = styled.img `
    width: 70px;
    @media (max-width:480px) {
        width:60px;
    }
`
export const Button = styled.button `
    font-size: 20px;
    padding: 37px 0;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    border-bottom: 4px solid transparent;
    margin: 20px;
    font-weight: 500;
    color: white;
    &:hover,
    &:active{
        color: #808080;
        border-bottom: 4px solid #808080;
        transition: 500ms;
    }
    @media (max-width:480px) {
        padding: 10px;
        margin: 10px;
    }
`
