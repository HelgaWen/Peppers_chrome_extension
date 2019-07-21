import styled from 'styled-components';

const GreetingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  padding: 20px;
`;

const GreetingLine = styled.div`
  z-index: 1;
  left: 120px;
  top: 120px;
  width: 5px;
  height: 80px;
  margin-right: 5px;
  border-radius: 4px;
  transform-origin: top;
  background: #47cd93;
  background: -moz-linear-gradient(top, #47cd93 0%, #24c285 0%, #337556 52%, #364154 100%);
  background: -webkit-gradient(left top, left bottom, color-stop(0%, #47cd93), color-stop(0%, #24c285), color-stop(52%, #337556), color-stop(100%, #364154));
  background: -webkit-linear-gradient(top, #47cd93 0%, #24c285 0%, #337556 52%, #364154 100%);
  background: -o-linear-gradient(top, #47cd93 0%, #24c285 0%, #337556 52%, #364154 100%);
  background: -ms-linear-gradient(top, #47cd93 0%, #24c285 0%, #337556 52%, #364154 100%);
  background: linear-gradient(to bottom, #47cd93 0%, #24c285 0%, #337556 52%, #364154 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#47cd93', endColorstr='#364154', GradientType=0 );
`;

const GreetingText = styled.p`
  margin-top: 10px;
  font-size: 2rem;
  font-weight: 400;
`;

export {
  GreetingWrapper,
  GreetingLine,
  GreetingText
}