import styled from "styled-components";
const lightViolet = '#8E54E9';
const deepVioltet = '#5700df';
export const Todocontainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 30rem;
margin-top: 2rem;
color: ${lightViolet};
`;

export const TodoList = styled.div`
width: 100%;
background: #fff;
margin-top: 0.5rem;
font-size: 1.3rem;
display: flex;
border-radius: 0.3rem;
padding: 0.5rem 0.3rem;
box-sizing: border-box;
position: relative;
& .delete-button{
    position: absolute;
    font-size: 1.3rem;
    background: none;
    border: 0;
    right: 0.3rem;
    top: 0;
    cursor: pointer;
    display: flex;
    height: 100%;
    cursor: pointer;
    align-items: center;
    & .delete-icon{
        color: ${lightViolet};
    }
    & :hover{
    color: ${deepVioltet};
    }
}
`;