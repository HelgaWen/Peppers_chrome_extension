import styled from "styled-components";
import { Button } from './general';

const Title = styled.h1`
  font-size: 12px;
  font-weight: 400px;
  margin-bottom: -8px;
  color: ${props => props.theme.color};
`;

const Description = styled.p`
  font-size: 10px;
  color: ${props => props.theme.color};
`;

const RmvButton = styled(Button)`
  ${props => (props.clicked ? "display: block" : "display:none")};
  border: 1px solid ${props => props.theme.color};
`;

export { Title, Description, RmvButton };
