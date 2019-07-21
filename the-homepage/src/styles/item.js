import styled from 'styled-components';

const Title = styled.h1`
  font-size: 12px;
  color: ${props => props.theme.color};
`;

const Description = styled.p`
  font-size: 10px;
  color:grey;
`;

const Button = styled.button`
    ${props => props.clicked ? 'display: block' : 'display:none'}
`;

export {
  Title,
  Description,
  Button
};