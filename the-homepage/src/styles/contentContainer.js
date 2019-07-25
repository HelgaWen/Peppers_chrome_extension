import styled, { css } from "styled-components";

const ContentCardWrapper = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 50%;
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
    font-size: 0.7rem;
    color: ${props => props.theme.color};
`;

export { ContentCardWrapper, HideContentContainer, Text };
