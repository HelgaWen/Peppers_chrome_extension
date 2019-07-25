import styled from 'styled-components';

const QuotesContainer = styled.div`
    max-width: 70%; 
`;

const Text = styled.p`
    word-wrap: break-word;
    font-style: italic;
    font-size: 1.1rem;
    margin: 0;
    text-align: center;
`;

const Author = styled.p`
    word-wrap: break-word;
    font-size: 1.1rem;
    margin: 5px 0 0 0;
    text-align: center;
    font-weight: bold;
`;

export {
    Text,
    Author, 
    QuotesContainer
}