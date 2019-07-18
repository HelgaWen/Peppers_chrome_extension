import styled, { keyframes } from 'styled-components';

const rotate360 = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const SpinnerAnimation = styled.div`
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  width: 100px;
  height: 100px;
  margin-top: -50px;
  border-radius: 50%;
  border: 1px solid #f6f;
  border-top-color: #0e0;
  border-right-color: #0dd;
  border-bottom-color: #f90;
  animation: ${rotate360} 0.6s linear infinite;
`;

export {
  SpinnerAnimation
}