import styled, { createGlobalStyle } from "styled-components";
const lightViolet = '#8E54E9';
const deepVioltet = '#5700df';
export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    
}
body{
}
input{
    outline: none;
}

`;
export const Wrapper = styled.section`
background-image: linear-gradient(36deg, #4776E6, #8E54E9);
min-height: 100vh;
padding: 5rem 0 2rem 0;
box-sizing: border-box;
& .todo-text {
    font-size: 1.3rem;
    padding: 0.5rem 0;
    color: #fff
}
& .inner-to-do-container {
    display: flex;
    flex-direction: column;
    align-items: center;

}
& .to-do-container {
}

`;

export const InputList = styled.div`
display: flex;
position: relative;
width: 30rem;

& .list-input {
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    width: 100%;
    color: ${lightViolet};
    font-size: 1.1rem;
    border-radius: 0.3rem;
    border: 0;
}
& .input-button{
    position: absolute;
    font-size: 1.3rem;
    background: none;
    outline: none;
    border: 0;
    line-height: 2.2rem;
    right: 0.3rem;
    cursor: pointer;
    display: flex;
    height: 100%;
    cursor: pointer;
    align-items: center;
    & .input-icon{
        color: ${lightViolet};
    }
    & :hover{
    color: ${deepVioltet};
    }
}
`;