import styled, { keyframes } from "styled-components";

const enterImage = keyframes`
0%{
    opacity: 0;
}
100%{
    opacity: 1;
}
`
export const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
    animation: ${enterImage} 5s ease-in-out;
   
`