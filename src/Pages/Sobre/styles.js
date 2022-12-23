import styled from "styled-components";
export const Container = styled.div `
    width:100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const AboutContainer = styled.div`
    width: 1000px;
    display: flex;
    @media (max-width:480px) {
        flex-direction: column;
        width: 400px;
        text-align: justify;
    }
   

`
export const Text = styled.p `
    font-size: 30px;
    margin: 10px;
    @media (max-width:480px) {
        font-size: 25px;
    }
   

`