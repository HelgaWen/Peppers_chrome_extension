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

export { ContentCardWrapper };
