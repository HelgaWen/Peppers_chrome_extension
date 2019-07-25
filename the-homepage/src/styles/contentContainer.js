import styled, { css } from "styled-components";

const ContentCardWrapper = styled.div`
  position: absolute;
  display: grid;
  width: 95vw;
  height: 50vh;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat (2, 1fr);
  ${props =>
    props.layout &&
    css`
      grid-template-columns: repeat(2, 1fr);
    `}
`;

const HideContentContainer = styled.div`
  position:absolute;
  top: 180%;
  left:-1%;
  width: 10vw;
  display:flex;
  flex-direction:column;
`;

const Text = styled.span`
  padding-left: 5px;
  font-size: 0.7rem;
  color: ${props => props.theme.color};
`;

export { ContentCardWrapper, HideContentContainer, Text };
