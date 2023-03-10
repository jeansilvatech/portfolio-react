import styled, { keyframes } from "styled-components";

const principal = keyframes`
0%{
    opacity:0;
}
50%{
    opacity: 1;
}
100%{
    opacity:0;
}
`;

export const Principal = styled.div `
    width: 100vw;
    height: 100vh;
    background-color: #191970;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;

`
export const Text = styled.div `
    margin-left: 20px;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-transform: uppercase;
    @media (max-width:480px) {
        width: 90%;
        position: absolute;
        z-index: 999;
    }
`
export const Image = styled.div `
    height: 100vh;
    width: 40%;
    background-image: url('https://www.imagensempng.com.br/wp-content/uploads/2021/08/04-18.png');
    background-size: cover;
    background-repeat:no-repeat;
    margin-top: 10px;
    animation: ${principal} 10s infinite;
    @media (max-width:480px) {
        width: 100%;
        position: absolute;
        opacity: 0.3;
        animation: none;
    }

`
export const Title = styled.h1 `
    font-size: 40px;
    margin:0;
    @media (max-width:480px) {
        font-size:35px;
    }
`
export const Subtitle = styled.h2 `
    font-size: 25px;
    color: #A9A9A9;
    @media (max-width:480px) {
        font-size:20px;
    }
`
