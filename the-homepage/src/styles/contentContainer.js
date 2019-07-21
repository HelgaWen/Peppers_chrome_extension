import styled, { css } from 'styled-components';

const ContentCardWrapper = styled.div`
  display: grid;
  width: 100%;
  height:300px;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  ${props =>
    props.layout &&
    css`
      grid-template-columns: repeat(2, 1fr);
    `}
`;

export {
  ContentCardWrapper
}