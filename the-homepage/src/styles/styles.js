import styled, { css } from "styled-components";


const PageWrapper = styled.div`
    width:100%;
    height:800px;
    display:flex;
    justify-content:center;
`;

const NameInput = styled.input`
    margin: 0px;
    padding: 0px;
    outline:none;
    border: none;
    font-size: 1.1rem;
`;

const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content:center;
    align-items: center;
    border-radius: 5px;
    border: 1px solid #ddd;
    padding: 10px;
    margin-bottom: 20px;
`;


const InputLabel = styled.div`
    font-size: 1.1rem;
    color: #2a2b42;
    margin-bottom: 3px;
`;





export {
    PageWrapper,
    InputWrapper,
    InputLabel,
    NameInput
};