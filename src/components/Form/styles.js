import styled, { keyframes } from "styled-components";

export const enter = keyframes`
0%{
    transform: translateY(500px);
}`
export const Container = styled.div `
    width: 100vw;
    height: 90vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    animation: ${enter} 1s ease-in-out ;

`
export const Forms = styled.form `
    width: 400px;
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content:space-between;
    margin-bottom: 20px;
    font-size: 25px;
    @media (max-width:480px) {
        width: 300px;
        font-size: 18px;
    }
`
export const Fields = styled.div `
    display: flex;
    justify-content: space-between;
    align-items:center;
    width:100%;
    margin: 10px;
`
export const Button = styled.button `
    font-size: 20px;
    margin: 10px;
    padding: 10px 50px;
    border: none;
    background-color: white;
    color: #1c1c1c;
    border-radius: 20px;
    font-weight: 600;
    cursor: pointer;
    transition: 500ms;
    &:hover{
        background-color: rgba(255,255,255, 0.5);
        color: white;
        transition: 500ms;
    }
`
export const Input = styled.input `
    padding: 15px 35px;
    background-color: rgba(255,255,255, 0.5);
    border-radius: 10px;
    outline:0;
    border: none;
    &:hover{
            background-color:white;
    }
    @media (max-width:480px) {
        padding: 10px 30px;
    }
`
export const TextArea = styled.textarea `
 height: 100px;
 background-color: rgba(255,255,255, 0.5);
 width: 205px;
 border: none;
 outline:none;
 border-radius: 10px;
 text-align:center;
 @media (max-width:480px) {
    width: 195px;
    }

`
export const ContainerSocial = styled.div `
    margin-top: 20px;
`
export const Social = styled.a `
    font-size: 30px;
    margin: 10px;
    color: white;
    transition: 500ms;
    &:hover{
        color:rgba(255,255,255, 0.5);
        transition: 500ms;
    }
    
    
`
export const Line = styled.div `
    height: 1px;
    width: 400px;
    background-color: white;
    border-radius: 10px;
    @media (max-width:480px) {
        width:170px;
    }
`
export const H2 = styled.h2 `
    margin-top: 0 10px ;
`

