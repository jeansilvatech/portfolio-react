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
`
export const Logo = styled.div `
    padding: 10px;
`
export const Buttons = styled.div `
    padding: 10px;
`
export const Image = styled.img `
    width: 70px;
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
`
