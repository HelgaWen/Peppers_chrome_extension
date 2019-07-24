import styled from "styled-components";
import { Button } from './general';

const Title = styled.h1`
  font-size: 18px;
  font-weight: 400px;
  color: ${props => props.theme.color};
  margin-bottom: 0;
  width: 80%;
  word-wrap: break-word;
`;

const Description = styled.p`
  margin-top: 0px;
  font-size: 18px;
  color: ${props => props.theme.color};
  width: 80%;
  word-wrap: break-word;
`;

const RmvButton = styled(Button)`
  ${props => (props.clicked ? "display: block" : "display:none")};
  border: 1px solid ${props => props.theme.color};
`;

export { Title, Description, RmvButton };
