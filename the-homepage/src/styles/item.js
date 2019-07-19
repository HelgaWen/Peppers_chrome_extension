import styled from 'styled-components';

const Button = styled.button`
    ${props => props.clicked ? 'display: block' : 'display:none'}
`;

export {
    Button
};